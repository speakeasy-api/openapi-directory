import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Findings:
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

    
    def get_targets_target_id_findings_(self, request: operations.GetTargetsTargetIDFindingsRequest) -> operations.GetTargetsTargetIDFindingsResponse:
        r"""List target findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindings200ApplicationJSON])
                res.get_targets_target_id_findings_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindings401ApplicationJSON])
                res.get_targets_target_id_findings_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindings404ApplicationJSON])
                res.get_targets_target_id_findings_404_application_json_object = out

        return res

    
    def get_targets_target_id_findings_report_(self, request: operations.GetTargetsTargetIDFindingsReportRequest) -> operations.GetTargetsTargetIDFindingsReportResponse:
        r"""Retrieve finding report PDF format
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/report/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.get_targets_target_id_findings_report_200_application_pdf_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsReport400ApplicationJSON])
                res.get_targets_target_id_findings_report_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsReport401ApplicationJSON])
                res.get_targets_target_id_findings_report_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsReport404ApplicationJSON])
                res.get_targets_target_id_findings_report_404_application_json_object = out

        return res

    
    def get_targets_target_id_findings_id_(self, request: operations.GetTargetsTargetIDFindingsIDRequest) -> operations.GetTargetsTargetIDFindingsIDResponse:
        r"""Retrieve finding
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsID401ApplicationJSON])
                res.get_targets_target_id_findings_id_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsID404ApplicationJSON])
                res.get_targets_target_id_findings_id_404_application_json_object = out

        return res

    
    def get_targets_target_id_findings_id_log_(self, request: operations.GetTargetsTargetIDFindingsIDLogRequest) -> operations.GetTargetsTargetIDFindingsIDLogResponse:
        r"""Finding activity log.
        Finding activity log.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/log/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDFindingsIDLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Activity]])
                res.activities = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDLog401ApplicationJSON])
                res.get_targets_target_id_findings_id_log_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDFindingsIDLog404ApplicationJSON])
                res.get_targets_target_id_findings_id_log_404_application_json_object = out

        return res

    
    def patch_targets_target_id_findings_bulk_update_(self, request: operations.PatchTargetsTargetIDFindingsBulkUpdateRequest) -> operations.PatchTargetsTargetIDFindingsBulkUpdateResponse:
        r"""Bulk update findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/bulk/update/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDFindingsBulkUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSON])
                res.patch_targets_target_id_findings_bulk_update_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSON])
                res.patch_targets_target_id_findings_bulk_update_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSON])
                res.patch_targets_target_id_findings_bulk_update_404_application_json_object = out

        return res

    
    def patch_targets_target_id_findings_id_(self, request: operations.PatchTargetsTargetIDFindingsIDRequest) -> operations.PatchTargetsTargetIDFindingsIDResponse:
        r"""Partial update finding
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchTargetsTargetIDFindingsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsID400ApplicationJSON])
                res.patch_targets_target_id_findings_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsID401ApplicationJSON])
                res.patch_targets_target_id_findings_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsID403ApplicationJSON])
                res.patch_targets_target_id_findings_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchTargetsTargetIDFindingsID404ApplicationJSON])
                res.patch_targets_target_id_findings_id_404_application_json_object = out

        return res

    
    def post_targets_target_id_findings_bulk_report_(self, request: operations.PostTargetsTargetIDFindingsBulkReportRequest) -> operations.PostTargetsTargetIDFindingsBulkReportResponse:
        r"""Finding report
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/bulk/report/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDFindingsBulkReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkReport400ApplicationJSON])
                res.post_targets_target_id_findings_bulk_report_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkReport401ApplicationJSON])
                res.post_targets_target_id_findings_bulk_report_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkReport404ApplicationJSON])
                res.post_targets_target_id_findings_bulk_report_404_application_json_object = out

        return res

    
    def post_targets_target_id_findings_bulk_retest_(self, request: operations.PostTargetsTargetIDFindingsBulkRetestRequest) -> operations.PostTargetsTargetIDFindingsBulkRetestResponse:
        r"""Bulk retest findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/bulk/retest/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDFindingsBulkRetestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkRetest400ApplicationJSON])
                res.post_targets_target_id_findings_bulk_retest_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkRetest401ApplicationJSON])
                res.post_targets_target_id_findings_bulk_retest_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsBulkRetest404ApplicationJSON])
                res.post_targets_target_id_findings_bulk_retest_404_application_json_object = out

        return res

    
    def post_targets_target_id_findings_id_retest_(self, request: operations.PostTargetsTargetIDFindingsIDRetestRequest) -> operations.PostTargetsTargetIDFindingsIDRetestResponse:
        r"""Retest finding
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/retest/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTargetsTargetIDFindingsIDRetestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Scan])
                res.scan = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsIDRetest401ApplicationJSON])
                res.post_targets_target_id_findings_id_retest_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsIDRetest403ApplicationJSON])
                res.post_targets_target_id_findings_id_retest_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostTargetsTargetIDFindingsIDRetest404ApplicationJSON])
                res.post_targets_target_id_findings_id_retest_404_application_json_object = out

        return res

    
    def put_targets_target_id_findings_id_(self, request: operations.PutTargetsTargetIDFindingsIDRequest) -> operations.PutTargetsTargetIDFindingsIDResponse:
        r"""Update finding
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/findings/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTargetsTargetIDFindingsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsID400ApplicationJSON])
                res.put_targets_target_id_findings_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsID401ApplicationJSON])
                res.put_targets_target_id_findings_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsID403ApplicationJSON])
                res.put_targets_target_id_findings_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutTargetsTargetIDFindingsID404ApplicationJSON])
                res.put_targets_target_id_findings_id_404_application_json_object = out

        return res

    