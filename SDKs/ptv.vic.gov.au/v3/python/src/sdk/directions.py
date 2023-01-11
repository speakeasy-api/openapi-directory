import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Directions:
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

    
    def directions_for_direction(self, request: operations.DirectionsForDirectionRequest) -> operations.DirectionsForDirectionResponse:
        r"""View all routes for a direction of travel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/{direction_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForDirectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
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

    
    def directions_for_direction_and_type(self, request: operations.DirectionsForDirectionAndTypeRequest) -> operations.DirectionsForDirectionAndTypeResponse:
        r"""View all routes of a particular type for a direction of travel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/{direction_id}/route_type/{route_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForDirectionAndTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
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

    
    def directions_for_route(self, request: operations.DirectionsForRouteRequest) -> operations.DirectionsForRouteResponse:
        r"""View directions that a route travels in
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/directions/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectionsForRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DirectionsResponse])
                res.v3_directions_response = out
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

    