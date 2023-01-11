import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServiceInventory:
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

    
    def list_service_inventories(self, request: operations.ListServiceInventoriesRequest) -> operations.ListServiceInventoriesResponse:
        r"""List ServiceInventories
        Returns an array of ServiceInventory objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/service_inventories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventoriesCollection])
                res.service_inventories_collection = out

        return res

    
    def list_service_inventory_tags(self, request: operations.ListServiceInventoryTagsRequest) -> operations.ListServiceInventoryTagsResponse:
        r"""List Tags for ServiceInventory
        Returns an array of Tag objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceInventoryTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagsCollection])
                res.tags_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def show_service_inventory(self, request: operations.ShowServiceInventoryRequest) -> operations.ShowServiceInventoryResponse:
        r"""Show an existing ServiceInventory
        Returns a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventory])
                res.service_inventory = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def tag_service_inventory(self, request: operations.TagServiceInventoryRequest) -> operations.TagServiceInventoryResponse:
        r"""Tag a ServiceInventory
        Tags a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/tag", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Tag]])
                res.tags = out
        elif r.status_code == 304:
            pass

        return res

    
    def untag_service_inventory(self, request: operations.UntagServiceInventoryRequest) -> operations.UntagServiceInventoryResponse:
        r"""Untag a ServiceInventory
        Untags a ServiceInventory object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/service_inventories/{id}/untag", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagServiceInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    