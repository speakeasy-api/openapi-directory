import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class EmployeeStaging:
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

    
    def add_new_employee_to_web_link(self, request: operations.AddNewEmployeeToWebLinkRequest) -> operations.AddNewEmployeeToWebLinkResponse:
        r"""Add new employee to Web Link
        Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/weblinkstaging/companies/{companyId}/employees/newemployees", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNewEmployeeToWebLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TrackingNumberResponse]])
                res.tracking_number_responses = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    