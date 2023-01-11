import requests
from sdk.models import operations
from . import utils

class Base:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def base_read(self) -> operations.BaseReadResponse:
        r"""Root
        Welcome to the Open Science Framework API. With this API you can access users, projects, components, logs, and files from the [Open Science Framework](https://osf.io/). The Open Science Framework (OSF) is a free, open-source service maintained by the [Center for Open Science](http://cos.io/).
        
        #### Returns
        A JSON object with `meta` and `links` keys.
        
        The `meta` key contains information such as a welcome message from the API, the specified version of the request, and the full representation of the current user, if authentication credentials were provided in the request.
        
        The `links` key contains links to the following entity collections: [addons](#tag/Addons), [collections](), [institutions](#tag/Institutions), [licenses](#tag/Licenses), [metaschemas](#tag/Metaschemas), [nodes](#tag/Nodes), [registrations](#tag/Registrations), [users](#tag/Users)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BaseReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    