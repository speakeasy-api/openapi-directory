import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LocalTaxes:
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

    
    def add_local_tax(self, request: operations.AddLocalTaxRequest) -> operations.AddLocalTaxResponse:
        r"""Add new local tax
        Sends new employee local tax information directly to Web Pay.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLocalTaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def delete_local_tax_by_tax_code(self, request: operations.DeleteLocalTaxByTaxCodeRequest) -> operations.DeleteLocalTaxByTaxCodeResponse:
        r"""Delete local tax by tax code
        Delete local tax by tax code
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocalTaxByTaxCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def get_all_local_taxes(self, request: operations.GetAllLocalTaxesRequest) -> operations.GetAllLocalTaxesResponse:
        r"""Get all local taxes
        Returns all local taxes for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllLocalTaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LocalTax]])
                res.local_taxes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    
    def get_local_tax_by_tax_code(self, request: operations.GetLocalTaxByTaxCodeRequest) -> operations.GetLocalTaxByTaxCodeResponse:
        r"""Get local taxes by tax code
        Returns all local taxes with the provided tax code for the selected employee.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocalTaxByTaxCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LocalTax]])
                res.local_taxes = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Error]])
                res.errors = out

        return res

    