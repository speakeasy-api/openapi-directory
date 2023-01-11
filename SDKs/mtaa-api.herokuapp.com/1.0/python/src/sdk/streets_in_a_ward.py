import requests
from sdk.models import operations
from . import utils

class StreetsInAWard:
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

    
    def streets_in_a_ward(self, request: operations.StreetsInAWardRequest) -> operations.StreetsInAWardResponse:
        r"""Returns all streets in a ward
        Returns all streets in a specified ward and ward postcode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}/{region}/{district}/{ward}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StreetsInAWardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    