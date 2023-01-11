import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PackageTypes:
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

    
    def create_package_type(self, request: operations.CreatePackageTypeRequest) -> operations.CreatePackageTypeResponse:
        r"""Create Custom Package Type
        Create a custom package type to better assist in getting accurate rate estimates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/packages"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePackageTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreatePackageTypeResponseBody])
                res.create_package_type_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def delete_package_type(self, request: operations.DeletePackageTypeRequest) -> operations.DeletePackageTypeResponse:
        r"""Delete A Custom Package By ID
        Delete a custom package using the ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/packages/{package_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePackageTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                res.empty_response_body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.empty_response_body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def get_package_type_by_id(self, request: operations.GetPackageTypeByIDRequest) -> operations.GetPackageTypeByIDResponse:
        r"""Get Custom Package Type By ID
        Get Custom Package Type by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/packages/{package_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageTypeByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPackageTypeByIDResponseBody])
                res.get_package_type_by_id_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def list_package_types(self) -> operations.ListPackageTypesResponse:
        r"""List Custom Package Types
        List the custom package types associated with the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/packages"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPackageTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPackageTypesResponseBody])
                res.list_package_types_response_body = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    
    def update_package_type(self, request: operations.UpdatePackageTypeRequest) -> operations.UpdatePackageTypeResponse:
        r"""Update Custom Package Type By ID
        Update the custom package type object by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/packages/{package_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePackageTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                res.empty_response_body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.empty_response_body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseBody])
                res.error_response_body = out

        return res

    