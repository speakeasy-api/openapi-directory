import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Runs:
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

    
    def runs_for_route(self, request: operations.RunsForRouteRequest) -> operations.RunsForRouteResponse:
        r"""View all trip/service runs for a specific route ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_route_and_route_type(self, request: operations.RunsForRouteAndRouteTypeRequest) -> operations.RunsForRouteAndRouteTypeResponse:
        r"""View all trip/service runs for a specific route ID and route type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/route/{route_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRouteAndRouteTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_run(self, request: operations.RunsForRunRequest) -> operations.RunsForRunResponse:
        r"""View all trip/service runs for a specific run_ref
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/{run_ref}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunsResponse])
                res.v3_runs_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    
    def runs_for_run_and_route_type(self, request: operations.RunsForRunAndRouteTypeRequest) -> operations.RunsForRunAndRouteTypeResponse:
        r"""View the trip/service run for a specific run_ref and route type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/runs/{run_ref}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RunsForRunAndRouteTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunResponse])
                res.v3_run_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3RunResponse])
                res.v3_run_response = out
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3ErrorResponse])
                res.v3_error_response = out

        return res

    