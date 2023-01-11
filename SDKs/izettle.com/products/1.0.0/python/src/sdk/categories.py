import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Categories:
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

    
    def create_categories(self, request: operations.CreateCategoriesRequest) -> operations.CreateCategoriesResponse:
        r"""Creates a new category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/categories/v2", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_product_types(self, request: operations.GetProductTypesRequest) -> operations.GetProductTypesResponse:
        r"""Retrieves all categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/categories/v2", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryResponse])
                res.category_response = out

        return res

    