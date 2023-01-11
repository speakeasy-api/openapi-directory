import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CoveragePlans:
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

    
    def create_coverage_plan(self, request: operations.CreateCoveragePlanRequest) -> operations.CreateCoveragePlanResponse:
        r"""Create Coverage Plan
        Here you can associate a plan with a line of coverage and then pass information about the plan like the name, network, waiting periods, and other details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/group_coverages/{group_coverage_id}/coverage_plans", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCoveragePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CoveragePlanResult])
                res.coverage_plan_result = out

        return res

    
    def edit_coverage_plan(self, request: operations.EditCoveragePlanRequest) -> operations.EditCoveragePlanResponse:
        r"""Edit a Coverage Plan
        Edit a coverage plan based on the ID provided. The version parameter must match the latest coverage plan version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/coverage_plans/{plan_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditCoveragePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CoveragePlanResult])
                res.coverage_plan_result = out

        return res

    
    def get_coverage_plan(self, request: operations.GetCoveragePlanRequest) -> operations.GetCoveragePlanResponse:
        r"""Get Coverage Plan
        Returns the latest version of a single coverage plan based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/coverage_plans/{plan_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCoveragePlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CoveragePlanResult])
                res.coverage_plan_result = out

        return res

    
    def get_group_coverage_plans(self, request: operations.GetGroupCoveragePlansRequest) -> operations.GetGroupCoveragePlansResponse:
        r"""Get all Group Coverage Plans
        Returns a list of all coverage plans for a given group coverage
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/group_coverages/{group_coverage_id}/coverage_plans", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupCoveragePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedCoveragePlanResult])
                res.paginated_coverage_plan_result = out

        return res

    