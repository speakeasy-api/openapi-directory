import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ProductsAPI:
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

    
    def products_api_count(self, request: operations.ProductsAPICountRequest) -> operations.ProductsAPICountResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi/Count"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPICountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.products_api_count_200_application_json_one_of = out

        return res

    
    def products_api_delete_product(self, request: operations.ProductsAPIDeleteProductRequest) -> operations.ProductsAPIDeleteProductResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/ProductsApi/{serial}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIDeleteProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def products_api_delete_product2(self, request: operations.ProductsAPIDeleteProduct2Request) -> operations.ProductsAPIDeleteProduct2Response:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/ProductsApi/{serial}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIDeleteProduct2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def products_api_find(self, request: operations.ProductsAPIFindRequest) -> operations.ProductsAPIFindResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi/Find"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.products_api_find_200_application_json_one_of = out

        return res

    
    def products_api_list(self, request: operations.ProductsAPIListRequest) -> operations.ProductsAPIListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi/List"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProductView]])
                res.product_views = out

        return res

    
    def products_api_patch_product(self, request: operations.ProductsAPIPatchProductRequest) -> operations.ProductsAPIPatchProductResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIPatchProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def products_api_patch_product2(self, request: operations.ProductsAPIPatchProduct2Request) -> operations.ProductsAPIPatchProduct2Response:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPIPatchProduct2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def products_api_save(self, request: operations.ProductsAPISaveRequest) -> operations.ProductsAPISaveResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ProductsApi/Save"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsAPISaveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.products_api_save_201_application_json_one_of = out

        return res

    