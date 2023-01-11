import requests
from sdk.models import operations
from . import utils

class FetchAccountInfo:
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

    
    def get_account(self) -> operations.GetAccountResponse:
        r"""Fetch credit balance and free API calls.
        Get the current credit balance and number of free API calls.
        
        Notes:
        
        * Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.
        
        * The \"*sizes*\" field is always \"all\", is deprecated and will soon be removed.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    