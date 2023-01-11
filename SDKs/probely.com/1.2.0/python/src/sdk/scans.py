import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Scans:
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

    
    def get_targets_all_scans_(self, request: operations.GetTargetsAllScansRequest) -> operations.GetTargetsAllScansResponse:
        r"""List scans for all targets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/scans/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllScansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllScans200ApplicationJSON])
                res.get_targets_all_scans_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllScans401ApplicationJSON])
                res.get_targets_all_scans_401_application_json_object = out

        return res

    
    def get_targets_target_id_scans_(self, request: operations.GetTargetsTargetIDScansRequest) -> operations.GetTargetsTargetIDScansResponse:
        r"""List scans
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScans200ApplicationJSON])
                res.get_targets_target_id_scans_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScans401ApplicationJSON])
                res.get_targets_target_id_scans_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScans404ApplicationJSON])
                res.get_targets_target_id_scans_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_dates_(self, request: operations.GetTargetsTargetIDScansDatesRequest) -> operations.GetTargetsTargetIDScansDatesResponse:
        r"""Dates where scans have ocurred
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/dates/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[date]])
                res.get_targets_target_id_scans_dates_200_application_json_date_strings = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansDates401ApplicationJSON])
                res.get_targets_target_id_scans_dates_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansDates404ApplicationJSON])
                res.get_targets_target_id_scans_dates_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_retrieve_page_(self, request: operations.GetTargetsTargetIDScansRetrievePageRequest) -> operations.GetTargetsTargetIDScansRetrievePageResponse:
        r"""Scan page
        Given a date return the page number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/retrieve_page/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansRetrievePageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansRetrievePage200ApplicationJSON])
                res.get_targets_target_id_scans_retrieve_page_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansRetrievePage400ApplicationJSON])
                res.get_targets_target_id_scans_retrieve_page_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansRetrievePage401ApplicationJSON])
                res.get_targets_target_id_scans_retrieve_page_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansRetrievePage404ApplicationJSON])
                res.get_targets_target_id_scans_retrieve_page_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_(self, request: operations.GetTargetsTargetIDScansIDRequest) -> operations.GetTargetsTargetIDScansIDResponse:
        r"""Retrieve scan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scan])
                res.scan = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansID401ApplicationJSON])
                res.get_targets_target_id_scans_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansID404ApplicationJSON])
                res.get_targets_target_id_scans_id_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_endpoints_(self, request: operations.GetTargetsTargetIDScansIDEndpointsRequest) -> operations.GetTargetsTargetIDScansIDEndpointsResponse:
        r"""Scan endpoints file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/endpoints/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDEndpointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/csv"):
                res.get_targets_target_id_scans_id_endpoints_200_application_csv_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDEndpoints401ApplicationJSON])
                res.get_targets_target_id_scans_id_endpoints_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDEndpoints404ApplicationJSON])
                res.get_targets_target_id_scans_id_endpoints_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_report_(self, request: operations.GetTargetsTargetIDScansIDReportRequest) -> operations.GetTargetsTargetIDScansIDReportResponse:
        r"""Scan report PDF, using the report type specified for the target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/report/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_targets_target_id_scans_id_report_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReport401ApplicationJSON])
                res.get_targets_target_id_scans_id_report_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReport404ApplicationJSON])
                res.get_targets_target_id_scans_id_report_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_report_default_(self, request: operations.GetTargetsTargetIDScansIDReportDefaultRequest) -> operations.GetTargetsTargetIDScansIDReportDefaultResponse:
        r"""Scan report PDF, using the default report type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/report/default/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDReportDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_targets_target_id_scans_id_report_default_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportDefault401ApplicationJSON])
                res.get_targets_target_id_scans_id_report_default_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportDefault404ApplicationJSON])
                res.get_targets_target_id_scans_id_report_default_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_report_owasp_(self, request: operations.GetTargetsTargetIDScansIDReportOwaspRequest) -> operations.GetTargetsTargetIDScansIDReportOwaspResponse:
        r"""Scan report PDF, using the OWASP report type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/report/owasp/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDReportOwaspResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_targets_target_id_scans_id_report_owasp_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportOwasp401ApplicationJSON])
                res.get_targets_target_id_scans_id_report_owasp_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportOwasp404ApplicationJSON])
                res.get_targets_target_id_scans_id_report_owasp_404_application_json_object = out

        return res

    
    def get_targets_target_id_scans_id_report_pci_(self, request: operations.GetTargetsTargetIDScansIDReportPciRequest) -> operations.GetTargetsTargetIDScansIDReportPciResponse:
        r"""Scan report PDF, using the PCI report type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/report/pci/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDScansIDReportPciResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_targets_target_id_scans_id_report_pci_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportPci401ApplicationJSON])
                res.get_targets_target_id_scans_id_report_pci_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDScansIDReportPci404ApplicationJSON])
                res.get_targets_target_id_scans_id_report_pci_404_application_json_object = out

        return res

    
    def post_targets_target_id_scan_now_(self, request: operations.PostTargetsTargetIDScanNowRequest) -> operations.PostTargetsTargetIDScanNowResponse:
        r"""Start a scan on the target
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scan_now/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDScanNowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scan])
                res.scan = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScanNow400ApplicationJSON])
                res.post_targets_target_id_scan_now_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScanNow401ApplicationJSON])
                res.post_targets_target_id_scan_now_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScanNow403ApplicationJSON])
                res.post_targets_target_id_scan_now_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScanNow404ApplicationJSON])
                res.post_targets_target_id_scan_now_404_application_json_object = out

        return res

    
    def post_targets_target_id_scans_id_cancel_(self, request: operations.PostTargetsTargetIDScansIDCancelRequest) -> operations.PostTargetsTargetIDScansIDCancelResponse:
        r"""Cancel running scan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/scans/{id}/cancel/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDScansIDCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scan])
                res.scan = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScansIDCancel401ApplicationJSON])
                res.post_targets_target_id_scans_id_cancel_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScansIDCancel403ApplicationJSON])
                res.post_targets_target_id_scans_id_cancel_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDScansIDCancel404ApplicationJSON])
                res.post_targets_target_id_scans_id_cancel_404_application_json_object = out

        return res

    