import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Statistics:
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

    
    def get_targets_all_average_fix_time_(self) -> operations.GetTargetsAllAverageFixTimeResponse:
        r"""Average fix time graph data (all targets)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/average_fix_time/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllAverageFixTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllAverageFixTime200ApplicationJSON])
                res.get_targets_all_average_fix_time_200_application_json_object = out

        return res

    
    def get_targets_all_needs_attention_pie_(self) -> operations.GetTargetsAllNeedsAttentionPieResponse:
        r"""Targets with open vulnerabilities pie chart data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/needs_attention_pie/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllNeedsAttentionPieResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllNeedsAttentionPie200ApplicationJSON])
                res.get_targets_all_needs_attention_pie_200_application_json_object = out

        return res

    
    def get_targets_all_needs_attention_top_(self) -> operations.GetTargetsAllNeedsAttentionTopResponse:
        r"""Targets with open vulnerabilities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/needs_attention_top/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllNeedsAttentionTopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetTargetsAllNeedsAttentionTop200ApplicationJSON]])
                res.get_targets_all_needs_attention_top_200_application_json_objects = out

        return res

    
    def get_targets_all_risk_trend_(self) -> operations.GetTargetsAllRiskTrendResponse:
        r"""Risk trend graph data (all targets)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/risk_trend/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllRiskTrendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetTargetsAllRiskTrend200ApplicationJSON]])
                res.get_targets_all_risk_trend_200_application_json_objects = out

        return res

    
    def get_targets_all_severity_trend_(self) -> operations.GetTargetsAllSeverityTrendResponse:
        r"""Severity trend graph data (all targets)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/severity_trend/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllSeverityTrendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsAllSeverityTrend200ApplicationJSON])
                res.get_targets_all_severity_trend_200_application_json_object = out

        return res

    
    def get_targets_all_top_vulns_(self) -> operations.GetTargetsAllTopVulnsResponse:
        r"""Top 5 vulnerabilities (all targets).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/targets/all/top_vulns/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsAllTopVulnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetTargetsAllTopVulns200ApplicationJSON]])
                res.get_targets_all_top_vulns_200_application_json_objects = out

        return res

    
    def get_targets_target_id_average_fix_time_(self, request: operations.GetTargetsTargetIDAverageFixTimeRequest) -> operations.GetTargetsTargetIDAverageFixTimeResponse:
        r"""Average vulnerability trend graph data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/average_fix_time/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDAverageFixTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDAverageFixTime200ApplicationJSON])
                res.get_targets_target_id_average_fix_time_200_application_json_object = out

        return res

    
    def get_targets_target_id_risk_trend_(self, request: operations.GetTargetsTargetIDRiskTrendRequest) -> operations.GetTargetsTargetIDRiskTrendResponse:
        r"""Risk trend graph data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/risk_trend/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDRiskTrendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetTargetsTargetIDRiskTrend200ApplicationJSON]])
                res.get_targets_target_id_risk_trend_200_application_json_objects = out

        return res

    
    def get_targets_target_id_severity_trend_(self, request: operations.GetTargetsTargetIDSeverityTrendRequest) -> operations.GetTargetsTargetIDSeverityTrendResponse:
        r"""Severity trend graph data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/severity_trend/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDSeverityTrendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTargetsTargetIDSeverityTrend200ApplicationJSON])
                res.get_targets_target_id_severity_trend_200_application_json_object = out

        return res

    
    def get_targets_target_id_top_vulns_(self, request: operations.GetTargetsTargetIDTopVulnsRequest) -> operations.GetTargetsTargetIDTopVulnsResponse:
        r"""Top 5 vulnerabilities
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/targets/{target_id}/top_vulns/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTargetsTargetIDTopVulnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetTargetsTargetIDTopVulns200ApplicationJSON]])
                res.get_targets_target_id_top_vulns_200_application_json_objects = out

        return res

    