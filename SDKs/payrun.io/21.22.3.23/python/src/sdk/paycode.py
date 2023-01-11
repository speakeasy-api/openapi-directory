import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PayCode:
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

    
    def delete_pay_code(self, request: operations.DeletePayCodeRequest) -> operations.DeletePayCodeResponse:
        r"""Deletes a pay code
        Delete the specified pay code
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePayCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_pay_code_revision(self, request: operations.DeletePayCodeRevisionRequest) -> operations.DeletePayCodeRevisionResponse:
        r"""Deletes a pay code revision
        Delete the pay code revision for the specified date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePayCodeRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def delete_pay_code_revision_by_number(self, request: operations.DeletePayCodeRevisionByNumberRequest) -> operations.DeletePayCodeRevisionByNumberResponse:
        r"""Delete an PayCode revision matching the specified revision number.
        Deletes the specified pay code revision for the matching revision number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePayCodeRevisionByNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_all_pay_code_tags(self, request: operations.GetAllPayCodeTagsRequest) -> operations.GetAllPayCodeTagsResponse:
        r"""Get all pay code tags
        Gets all the pay code tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCodes/Tags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllPayCodeTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_code_by_effective_date(self, request: operations.GetPayCodeByEffectiveDateRequest) -> operations.GetPayCodeByEffectiveDateResponse:
        r"""Gets pay code for specified date
        Gets the pay code revision for the specified effective date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodeByEffectiveDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayCode])
                res.pay_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_code_from_employer(self, request: operations.GetPayCodeFromEmployerRequest) -> operations.GetPayCodeFromEmployerResponse:
        r"""Gets the specified pay code from the employer
        Returns the specified pay code from the employer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodeFromEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayCode])
                res.pay_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_code_revision_by_number(self, request: operations.GetPayCodeRevisionByNumberRequest) -> operations.GetPayCodeRevisionByNumberResponse:
        r"""Gets the pay code by revision number
        Get the pay code revision matching the specified revision number
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodeRevisionByNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayCode])
                res.pay_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_code_revisions(self, request: operations.GetPayCodeRevisionsRequest) -> operations.GetPayCodeRevisionsResponse:
        r"""Get all revisions of the Pay Code
        Returns links to all revisions of the pay code
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}/Revisions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodeRevisionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_codes_by_effective_date(self, request: operations.GetPayCodesByEffectiveDateRequest) -> operations.GetPayCodesByEffectiveDateResponse:
        r"""Gets all pay codes for specified date
        Gets the effective pay code revision for the specified date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCodes/{EffectiveDate}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodesByEffectiveDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_codes_from_employer(self, request: operations.GetPayCodesFromEmployerRequest) -> operations.GetPayCodesFromEmployerResponse:
        r"""Gets the pay codes from the employer
        Get links to all the pay codes for the specified employer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCodes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodesFromEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_codes_from_nominal_code(self, request: operations.GetPayCodesFromNominalCodeRequest) -> operations.GetPayCodesFromNominalCodeResponse:
        r"""Gets the pay codes by nominal code
        Get the pay codes that share the specified nominal code
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/NominalCode/{NominalCodeId}/PayCodes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodesFromNominalCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def get_pay_codes_with_tag(self, request: operations.GetPayCodesWithTagRequest) -> operations.GetPayCodesWithTagResponse:
        r"""Get pay codes with tag
        Gets the pay codes with the tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCodes/Tag/{TagId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayCodesWithTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinkCollection])
                res.link_collection = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def patch_pay_code(self, request: operations.PatchPayCodeRequest) -> operations.PatchPayCodeResponse:
        r"""Patches the pay code
        Patches the specified pay code object with the supplied values
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPayCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayCode])
                res.pay_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def post_pay_code(self, request: operations.PostPayCodeRequest) -> operations.PostPayCodeResponse:
        r"""Create a new pay code
        Create a new pay code object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCodes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPayCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Link])
                res.link = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def put_pay_code(self, request: operations.PutPayCodeRequest) -> operations.PutPayCodeResponse:
        r"""Updates a pay code
        Updates the existing specified pay code object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Employer/{EmployerId}/PayCode/{PayCodeId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPayCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PayCode])
                res.pay_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    