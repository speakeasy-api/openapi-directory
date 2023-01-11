import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Source:
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

    
    def incremental_refresh_source(self, request: operations.IncrementalRefreshSourceRequest) -> operations.IncrementalRefreshSourceResponse:
        r"""Incremental Refresh an existing Source
        Incremental Refresh a source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/incremental_refresh", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IncrementalRefreshSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def list_source_service_instances(self, request: operations.ListSourceServiceInstancesRequest) -> operations.ListSourceServiceInstancesResponse:
        r"""List ServiceInstances for Source
        Returns an array of ServiceInstance objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInstancesCollection])
                res.service_instances_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_inventories(self, request: operations.ListSourceServiceInventoriesRequest) -> operations.ListSourceServiceInventoriesResponse:
        r"""List ServiceInventories for Source
        Returns an array of ServiceInventory objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_inventories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceInventoriesCollection])
                res.service_inventories_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_offering_nodes(self, request: operations.ListSourceServiceOfferingNodesRequest) -> operations.ListSourceServiceOfferingNodesResponse:
        r"""List ServiceOfferingNodes for Source
        Returns an array of ServiceOfferingNode objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_offering_nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceOfferingNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingNodesCollection])
                res.service_offering_nodes_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_offerings(self, request: operations.ListSourceServiceOfferingsRequest) -> operations.ListSourceServiceOfferingsResponse:
        r"""List ServiceOfferings for Source
        Returns an array of ServiceOffering objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_offerings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServiceOfferingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceOfferingsCollection])
                res.service_offerings_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_service_plans(self, request: operations.ListSourceServicePlansRequest) -> operations.ListSourceServicePlansResponse:
        r"""List ServicePlans for Source
        Returns an array of ServicePlan objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/service_plans", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceServicePlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePlansCollection])
                res.service_plans_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_source_tasks(self, request: operations.ListSourceTasksRequest) -> operations.ListSourceTasksResponse:
        r"""List Tasks for Source
        Returns an array of Task objects
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TasksCollection])
                res.tasks_collection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    
    def list_sources(self, request: operations.ListSourcesRequest) -> operations.ListSourcesResponse:
        r"""List Sources
        Returns an array of Source objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SourcesCollection])
                res.sources_collection = out

        return res

    
    def refresh_source(self, request: operations.RefreshSourceRequest) -> operations.RefreshSourceResponse:
        r""" Refresh an existing Source
        Refresh a source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}/refresh", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def show_source(self, request: operations.ShowSourceRequest) -> operations.ShowSourceResponse:
        r"""Show an existing Source
        Returns a Source object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShowSourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Source])
                res.source = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorNotFound])
                res.error_not_found = out

        return res

    