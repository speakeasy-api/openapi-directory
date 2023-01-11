import requests
from sdk.models import operations
from . import utils

class CiscoSntc:
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

    
    def export_assets_cisco_csv(self, request: operations.ExportAssetsCiscoCsvRequest) -> operations.ExportAssetsCiscoCsvResponse:
        r"""Cisco serial number and model name export for Cisco Smart Net Total Care Service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.cisco.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsCiscoCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_assets_cisco_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    