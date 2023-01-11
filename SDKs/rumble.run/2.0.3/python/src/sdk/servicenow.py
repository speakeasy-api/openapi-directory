import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServiceNow:
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

    
    def snow_export_assets_csv(self, request: operations.SnowExportAssetsCsvRequest) -> operations.SnowExportAssetsCsvResponse:
        r"""Export an asset inventory as CSV for ServiceNow integration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.servicenow.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportAssetsCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.snow_export_assets_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def snow_export_assets_json(self, request: operations.SnowExportAssetsJSONRequest) -> operations.SnowExportAssetsJSONResponse:
        r"""Exports the asset inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.servicenow.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportAssetsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssetServiceNow]])
                res.asset_service_nows = out
        elif r.status_code == 401:
            pass

        return res

    
    def snow_export_services_csv(self, request: operations.SnowExportServicesCsvRequest) -> operations.SnowExportServicesCsvResponse:
        r"""Export a service inventory as CSV for ServiceNow integration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.servicenow.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportServicesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.snow_export_services_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    