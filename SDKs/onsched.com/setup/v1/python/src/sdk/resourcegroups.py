import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ResourceGroups:
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

    
    def delete_setup_v1_resourcegroups_id_(self, request: operations.DeleteSetupV1ResourcegroupsIDRequest) -> operations.DeleteSetupV1ResourcegroupsIDResponse:
        r"""Deletes a resource group object.
        Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def get_setup_v1_resourcegroups(self, request: operations.GetSetupV1ResourcegroupsRequest) -> operations.GetSetupV1ResourcegroupsResponse:
        r"""Returns a list of resourcegroups.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_group_list_view_model = out

        return res

    
    def get_setup_v1_resourcegroups_id_(self, request: operations.GetSetupV1ResourcegroupsIDRequest) -> operations.GetSetupV1ResourcegroupsIDResponse:
        r"""Returns a resourceGroup object.
        The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def post_setup_v1_resourcegroups(self, request: operations.PostSetupV1ResourcegroupsRequest) -> operations.PostSetupV1ResourcegroupsResponse:
        r"""Creates a new resource group object.
        Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
        Email Address and a Name are required for creating a new resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def put_setup_v1_resourcegroups_id_(self, request: operations.PutSetupV1ResourcegroupsIDRequest) -> operations.PutSetupV1ResourcegroupsIDResponse:
        r"""Updates a resource group object.
        Use this endpoint to update a resource group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def put_setup_v1_resourcegroups_id_recover(self, request: operations.PutSetupV1ResourcegroupsIDRecoverRequest) -> operations.PutSetupV1ResourcegroupsIDRecoverResponse:
        r"""Recovers a resource group object.
        Use this endpoint to recover a deleted resource group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    