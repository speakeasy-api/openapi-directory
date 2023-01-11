import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Employee:
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

    
    def add_employee(self, request: operations.AddEmployeeRequest) -> operations.AddEmployeeResponse:
        r"""Add new employee
        New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.EmployeeIDResponse]])
                res.employee_id_responses = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def get_all_employees(self, request: operations.GetAllEmployeesRequest) -> operations.GetAllEmployeesResponse:
        r"""Get all employees
        Get All Employees API will return employee data currently available in Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllEmployeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.EmployeeInfo]])
                res.employee_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def get_employee(self, request: operations.GetEmployeeRequest) -> operations.GetEmployeeResponse:
        r"""Get employee
        Get Employee API will return employee data currently available in Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Employee]])
                res.employees = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def update_employee(self, request: operations.UpdateEmployeeRequest) -> operations.UpdateEmployeeResponse:
        r"""Update employee
        Update Employee API will update existing employee data in WebPay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEmployeeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    