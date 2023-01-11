import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Export:
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

    
    def export_assets_csv(self, request: operations.ExportAssetsCsvRequest) -> operations.ExportAssetsCsvResponse:
        r"""Asset inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_assets_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_json(self, request: operations.ExportAssetsJSONRequest) -> operations.ExportAssetsJSONResponse:
        r"""Exports the asset inventory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Asset]])
                res.assets = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_jsonl(self, request: operations.ExportAssetsJsonlRequest) -> operations.ExportAssetsJsonlResponse:
        r"""Asset inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_assets_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_nmap_xml(self, request: operations.ExportAssetsNmapXMLRequest) -> operations.ExportAssetsNmapXMLResponse:
        r"""Asset inventory as Nmap-style XML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.nmap.xml"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsNmapXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.export_assets_nmap_xml_200_text_xml_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_csv(self, request: operations.ExportServicesCsvRequest) -> operations.ExportServicesCsvResponse:
        r"""Service inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_services_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_json(self, request: operations.ExportServicesJSONRequest) -> operations.ExportServicesJSONResponse:
        r"""Service inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Service]])
                res.services = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_jsonl(self, request: operations.ExportServicesJsonlRequest) -> operations.ExportServicesJsonlResponse:
        r"""Service inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_services_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_csv(self, request: operations.ExportSitesCsvRequest) -> operations.ExportSitesCsvResponse:
        r"""Site list as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_sites_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_json(self, request: operations.ExportSitesJSONRequest) -> operations.ExportSitesJSONResponse:
        r"""Export all sites
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_jsonl(self, request: operations.ExportSitesJsonlRequest) -> operations.ExportSitesJsonlResponse:
        r"""Site list as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_sites_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_csv(self, request: operations.ExportWirelessCsvRequest) -> operations.ExportWirelessCsvResponse:
        r"""Wireless inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_wireless_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_json(self, request: operations.ExportWirelessJSONRequest) -> operations.ExportWirelessJSONResponse:
        r"""Wireless inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Wireless]])
                res.wirelesses = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_jsonl(self, request: operations.ExportWirelessJsonlRequest) -> operations.ExportWirelessJsonlResponse:
        r"""Wireless inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_wireless_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    