import requests
from sdk.models import operations
from . import utils

class Preflight:
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

    
    def auto_check_in(self, request: operations.AutoCheckInRequest) -> operations.AutoCheckInResponse:
        r"""Auto Check-In
        Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/preflight/autocheckin/{ticketnumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoCheckInResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.auto_check_in_200_application_json_string = r.content

        return res

    