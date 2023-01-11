import requests
from sdk.models import operations
from . import utils

class Versions:
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

    
    def get_versions_versions_get(self) -> operations.GetVersionsVersionsGetResponse:
        r"""Get Versions
        Respond with the text/csv representation for the served versions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/versions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionsVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv; header=present"):
                res.get_versions_versions_get_200_text_csv_string = r.content

        return res

    