import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Organization:
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

    
    def create_scan(self, request: operations.CreateScanRequest) -> operations.CreateScanResponse:
        r"""Create a scan task for a given site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}/scan", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_site(self, request: operations.CreateSiteRequest) -> operations.CreateSiteResponse:
        r"""Create a new site
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/sites"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        r"""Get details for a single agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Agent])
                res.agent = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_agents(self, request: operations.GetAgentsRequest) -> operations.GetAgentsResponse:
        r"""Get all agents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/agents"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Agent]])
                res.agents = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_asset(self, request: operations.GetAssetRequest) -> operations.GetAssetResponse:
        r"""Get asset details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_assets(self, request: operations.GetAssetsRequest) -> operations.GetAssetsResponse:
        r"""Get all assets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/assets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Asset]])
                res.assets = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_key(self, request: operations.GetKeyRequest) -> operations.GetKeyResponse:
        r"""Get API key details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        r"""Get organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_service(self, request: operations.GetServiceRequest) -> operations.GetServiceResponse:
        r"""Get service details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/services/{service_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_services(self, request: operations.GetServicesRequest) -> operations.GetServicesResponse:
        r"""Get all services
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Service]])
                res.services = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_site(self, request: operations.GetSiteRequest) -> operations.GetSiteResponse:
        r"""Get site details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_sites(self, request: operations.GetSitesRequest) -> operations.GetSitesResponse:
        r"""Get all sites
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/sites"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_task(self, request: operations.GetTaskRequest) -> operations.GetTaskResponse:
        r"""Get task details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_task_change_report(self, request: operations.GetTaskChangeReportRequest) -> operations.GetTaskChangeReportResponse:
        r"""Returns a temporary task change report data url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/changes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_task_scan_data(self, request: operations.GetTaskScanDataRequest) -> operations.GetTaskScanDataResponse:
        r"""Returns a temporary task scan data url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/data", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskScanDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_tasks(self, request: operations.GetTasksRequest) -> operations.GetTasksResponse:
        r"""Get all tasks (last 1000)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Task]])
                res.tasks = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_wireless_lan(self, request: operations.GetWirelessLanRequest) -> operations.GetWirelessLanResponse:
        r"""Get wireless LAN details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/wirelesss/{wireless_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWirelessLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Wireless])
                res.wireless = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_wireless_la_ns(self, request: operations.GetWirelessLaNsRequest) -> operations.GetWirelessLaNsResponse:
        r"""Get all wireless LANs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/wireless"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWirelessLaNsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Wireless]])
                res.wirelesses = out
        elif r.status_code == 401:
            pass

        return res

    
    def hide_task(self, request: operations.HideTaskRequest) -> operations.HideTaskResponse:
        r"""Signal that a completed task should be hidden
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/hide", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HideTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def import_scan_data(self, request: operations.ImportScanDataRequest) -> operations.ImportScanDataResponse:
        r"""Import a scan data file into a site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}/import", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportScanDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def remove_agent(self, request: operations.RemoveAgentRequest) -> operations.RemoveAgentResponse:
        r"""Remove and uninstall an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_asset(self, request: operations.RemoveAssetRequest) -> operations.RemoveAssetResponse:
        r"""Remove an asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_key(self, request: operations.RemoveKeyRequest) -> operations.RemoveKeyResponse:
        r"""Remove the current API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_service(self, request: operations.RemoveServiceRequest) -> operations.RemoveServiceResponse:
        r"""Remove a service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/services/{service_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_site(self, request: operations.RemoveSiteRequest) -> operations.RemoveSiteResponse:
        r"""Remove a site and associated assets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_wireless_lan(self, request: operations.RemoveWirelessLanRequest) -> operations.RemoveWirelessLanResponse:
        r"""Remove a wireless LAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/wirelesss/{wireless_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveWirelessLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def rotate_key(self, request: operations.RotateKeyRequest) -> operations.RotateKeyResponse:
        r"""Rotate the API key secret and return the updated key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key/rotate"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def stop_task(self, request: operations.StopTaskRequest) -> operations.StopTaskResponse:
        r"""Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/stop", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_agent_site(self, request: operations.UpdateAgentSiteRequest) -> operations.UpdateAgentSiteResponse:
        r"""Update the site associated with agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAgentSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Agent])
                res.agent = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_asset_comments(self, request: operations.UpdateAssetCommentsRequest) -> operations.UpdateAssetCommentsResponse:
        r"""Update asset comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAssetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_asset_tags(self, request: operations.UpdateAssetTagsRequest) -> operations.UpdateAssetTagsResponse:
        r"""Update asset tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAssetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_organization(self, request: operations.UpdateOrganizationRequest) -> operations.UpdateOrganizationResponse:
        r"""Update organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def update_site(self, request: operations.UpdateSiteRequest) -> operations.UpdateSiteResponse:
        r"""Update a site definition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        r"""Update task parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upgrade_agent(self, request: operations.UpgradeAgentRequest) -> operations.UpgradeAgentResponse:
        r"""Force an agent to update and restart
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}/update", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpgradeAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    