import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ContinuousProject:
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

    
    def collect_analytics(self, request: operations.CollectAnalyticsRequest) -> operations.CollectAnalyticsResponse:
        r"""Save/collect analytics data from Active widget
        Save/collect analytics data from Active widget
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}/collect-analytics", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CollectAnalyticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out

        return res

    
    def create_active_widget(self, request: operations.CreateActiveWidgetRequest) -> operations.CreateActiveWidgetResponse:
        r"""Create a new Active widget. This does not create a new Active project, just a separate widget.
        Create a new Active widget. This does not create a new Active project, just a separate widget.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateActiveWidgetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveWidget])
                res.active_widget = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def create_continuous_project(self, request: operations.CreateContinuousProjectRequest) -> operations.CreateContinuousProjectResponse:
        r"""Create a new continuous project
        Create a new continuous project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/continuous_projects"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateContinuousProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousProject])
                res.continuous_project = out

        return res

    
    def delete_active_widget(self, request: operations.DeleteActiveWidgetRequest) -> operations.DeleteActiveWidgetResponse:
        r"""Delete a single widget for this Active project
        Delete a single widget for this Active project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets/{widgetId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteActiveWidgetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_continuous_project(self, request: operations.DeleteContinuousProjectRequest) -> operations.DeleteContinuousProjectResponse:
        r"""Delete single continuous project
        Delete single continuous project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteContinuousProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationStatus])
                res.operation_status = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_active_widget(self, request: operations.GetActiveWidgetRequest) -> operations.GetActiveWidgetResponse:
        r"""Get a single widget for this Active project
        Get a single widget for this Active project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets/{widgetId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveWidgetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveWidget])
                res.active_widget = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_active_widgets(self, request: operations.GetActiveWidgetsRequest) -> operations.GetActiveWidgetsResponse:
        r"""Get widgets for this Active project
        Get widgets for this Active project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveWidgetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveWidgetList])
                res.active_widget_list = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_analytics_token(self, request: operations.GetAnalyticsTokenRequest) -> operations.GetAnalyticsTokenResponse:
        r"""Get JWT token to be used in analytics dashboards
        Get JWT token to be used in analytics dashboards
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}/analytics-token", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnalyticsTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyticsToken])
                res.analytics_token = out

        return res

    
    def get_continuous_project(self, request: operations.GetContinuousProjectRequest) -> operations.GetContinuousProjectResponse:
        r"""Get single continuous project
        Get single continuous project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContinuousProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousProject])
                res.continuous_project = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_continuous_projects(self) -> operations.GetContinuousProjectsResponse:
        r"""Get a list of continuous projects
        Get a list of continuous projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/continuous_projects"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContinuousProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousProjectsList])
                res.continuous_projects_list = out

        return res

    
    def reset_active_widget_token(self, request: operations.ResetActiveWidgetTokenRequest) -> operations.ResetActiveWidgetTokenResponse:
        r"""Resets the access token of the Active widget.
        Resets the access token of the Active widget.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets/{widgetId}/reset-token", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetActiveWidgetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveWidget])
                res.active_widget = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def translate(self, request: operations.TranslateRequest) -> operations.TranslateResponse:
        r"""Instantly translate your content with your existing TM and MT resources.
        Instantly translate your content with your existing TM and MT resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}/translate/{targetLanguage}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Translate200ApplicationJSON])
                res.translate_200_application_json_object = out

        return res

    
    def update_active_widget(self, request: operations.UpdateActiveWidgetRequest) -> operations.UpdateActiveWidgetResponse:
        r"""Update Active widget settings.
        Update Active widget settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{projectId}/widgets/{widgetId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateActiveWidgetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveWidget])
                res.active_widget = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_continuous_project(self, request: operations.UpdateContinuousProjectRequest) -> operations.UpdateContinuousProjectResponse:
        r"""Update continuous project
        Update continuous project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/continuous_projects/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateContinuousProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContinuousProject])
                res.continuous_project = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    