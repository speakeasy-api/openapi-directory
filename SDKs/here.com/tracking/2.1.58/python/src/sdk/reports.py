import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Reports:
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

    
    def get_reports_v4_health(self) -> operations.GetReportsV4HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/v4/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsV4HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4Health200ApplicationJSON])
                res.get_reports_v4_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_reports_v4_version(self) -> operations.GetReportsV4VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/v4/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsV4VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_reports_v4_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_reports_v4_report_id_(self, request: operations.GetReportsV4ReportIDRequest) -> operations.GetReportsV4ReportIDResponse:
        r"""Gets reports
        Provides status of the report creation and with various different query parameter
        combinations provides different kinds of reports related to `reportId`.
        
        Examples
        ---
        To get list of assets' dwelling times in the specified geofence during the report period, provide:
        
        * `reportId` of a dwelling rule and the period
        * `measure`: 'duration'
        * `groupBy`: 'asset'
        * `geofenceId`: your-geofence-ID
        
        To get report of how many times assets were in detention on average during each week of the report period, provide:
        
        * `reportId` of a detention rule and the period
        * `measure`: 'occurrence'
        * `method`: 'average'
        * `groupBy`: 'asset'
        * `interval`: 'week'
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reports/v4/{reportId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsV4ReportIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4ReportID200ApplicationJSON])
                res.get_reports_v4_report_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4ReportID400ApplicationJSON])
                res.get_reports_v4_report_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4ReportID401ApplicationJSON])
                res.get_reports_v4_report_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4ReportID403ApplicationJSON])
                res.get_reports_v4_report_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportsV4ReportID404ApplicationJSON])
                res.get_reports_v4_report_id_404_application_json_object = out

        return res

    
    def post_reports_v4(self, request: operations.PostReportsV4Request) -> operations.PostReportsV4Response:
        r"""Starts report creation
        Starts report generation.
        
        The request body contains ruleId, start date, and end date. Supported rule types are:
        * dwelling
        * detention
        * utilization
        
        Reports are generated based on the event data generated by the rule and associated devices.
        A `reportId` will be provided in the response.
        
        The report will be available for one week after which it needs to be created again. If a request
        matches an already generated report that is not yet expired, the previously generated report's ID
        is returned and no new report is generated.
        
        Note that the report should not be created with a time period that is in the future, as data
        ingested after creation of the report is not updated in the report.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/v4"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReportsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4200ApplicationJSON])
                res.post_reports_v4_200_application_json_object = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4202ApplicationJSON])
                res.post_reports_v4_202_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4400ApplicationJSON])
                res.post_reports_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4401ApplicationJSON])
                res.post_reports_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4403ApplicationJSON])
                res.post_reports_v4_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostReportsV4404ApplicationJSON])
                res.post_reports_v4_404_application_json_object = out

        return res

    