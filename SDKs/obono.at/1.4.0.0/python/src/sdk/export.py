import requests
from sdk.models import operations
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

    
    def get_export_csv_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/csv/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_dep131_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/dep131/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_dep7_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/dep7/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_gobd_registrierkassen_registrierkasse_uuid_(self, request: operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest) -> operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/gobd/registrierkassen/{registrierkasseUuid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_html_belege_beleg_uuid_(self, request: operations.GetExportHTMLBelegeBelegUUIDRequest) -> operations.GetExportHTMLBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/html/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportHTMLBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_pdf_belege_beleg_uuid_(self, request: operations.GetExportPdfBelegeBelegUUIDRequest) -> operations.GetExportPdfBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/pdf/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportPdfBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_qr_belege_beleg_uuid_(self, request: operations.GetExportQrBelegeBelegUUIDRequest) -> operations.GetExportQrBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/qr/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportQrBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_thermal_print_belege_beleg_uuid_(self, request: operations.GetExportThermalPrintBelegeBelegUUIDRequest) -> operations.GetExportThermalPrintBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/thermal-print/belege/{belegUuid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportThermalPrintBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_xls_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/xls/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    