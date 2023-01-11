import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Products:
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

    
    def count_all_products(self, request: operations.CountAllProductsRequest) -> operations.CountAllProductsResponse:
        r"""Retrieves the count of existing products
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2/count", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CountAllProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProductCountResponse]])
                res.product_count_responses = out

        return res

    
    def create_product(self, request: operations.CreateProductRequest) -> operations.CreateProductResponse:
        r"""Creates a new product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductResponse])
                res.product_response = out

        return res

    
    def delete_product(self, request: operations.DeleteProductRequest) -> operations.DeleteProductResponse:
        r"""Deletes a single product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/{productUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_products(self, request: operations.DeleteProductsRequest) -> operations.DeleteProductsResponse:
        r"""Deletes a list of products
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_all_options(self, request: operations.GetAllOptionsRequest) -> operations.GetAllOptionsResponse:
        r"""Retrieves an aggregate of active Options in the library
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/options", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.VariantOptionsResponse]])
                res.variant_options_responses = out

        return res

    
    def get_all_products_in_pos(self, request: operations.GetAllProductsInPosRequest) -> operations.GetAllProductsInPosResponse:
        r"""Retrieves all products visible in POS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProductsInPosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProductResponse]])
                res.product_responses = out

        return res

    
    def get_all_products_v2(self, request: operations.GetAllProductsV2Request) -> operations.GetAllProductsV2Response:
        r"""Retrieves all products visible in POS – v2
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProductsV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ProductResponse]])
                res.product_responses = out

        return res

    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""Retrieves a single product
        Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/{productUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductResponse])
                res.product_response = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_product(self, request: operations.UpdateProductRequest) -> operations.UpdateProductResponse:
        r"""Updates a single product
        Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2/{productUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            pass

        return res

    