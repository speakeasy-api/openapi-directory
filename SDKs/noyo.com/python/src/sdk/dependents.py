import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Dependents:
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

    
    def create_dependent(self, request: operations.CreateDependentRequest) -> operations.CreateDependentResponse:
        r"""Create Dependent
        Now, you can associate dependents who are electing coverage with respective employees.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/employees/{employee_id}/dependents", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDependentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DependentResult])
                res.dependent_result = out

        return res

    
    def edit_dependent(self, request: operations.EditDependentRequest) -> operations.EditDependentResponse:
        r"""Edit a Dependent
        Edit a dependent based on the ID provided. The version parameter must match the latest dependent version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/dependents/{dependent_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditDependentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DependentResult])
                res.dependent_result = out

        return res

    
    def get_dependent(self, request: operations.GetDependentRequest) -> operations.GetDependentResponse:
        r"""Get Dependent
        Returns the latest version of a single dependent based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/dependents/{dependent_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDependentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DependentResult])
                res.dependent_result = out

        return res

    
    def get_employee_dependents_list(self, request: operations.GetEmployeeDependentsListRequest) -> operations.GetEmployeeDependentsListResponse:
        r"""Get all Employee Dependents
        Returns a list of all dependents for a given employee
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/employees/{employee_id}/dependents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployeeDependentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedDependentResult])
                res.paginated_dependent_result = out

        return res

    