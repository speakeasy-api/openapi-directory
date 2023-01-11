import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Disruptions:
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

    
    def disruptions_get_all_disruptions(self, request: operations.DisruptionsGetAllDisruptionsRequest) -> operations.DisruptionsGetAllDisruptionsResponse:
        r"""View all disruptions for all route types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/disruptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetAllDisruptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
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

    
    def disruptions_get_disruption_by_id(self, request: operations.DisruptionsGetDisruptionByIDRequest) -> operations.DisruptionsGetDisruptionByIDResponse:
        r"""View a specific disruption
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/{disruption_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionResponse])
                res.v3_disruption_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionResponse])
                res.v3_disruption_response = out
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

    
    def disruptions_get_disruption_modes(self, request: operations.DisruptionsGetDisruptionModesRequest) -> operations.DisruptionsGetDisruptionModesResponse:
        r"""Get all disruption modes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/disruptions/modes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionModesResponse])
                res.v3_disruption_modes_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionModesResponse])
                res.v3_disruption_modes_response = out
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

    
    def disruptions_get_disruptions_by_route(self, request: operations.DisruptionsGetDisruptionsByRouteRequest) -> operations.DisruptionsGetDisruptionsByRouteResponse:
        r"""View all disruptions for a particular route
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/route/{route_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
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

    
    def disruptions_get_disruptions_by_route_and_stop(self, request: operations.DisruptionsGetDisruptionsByRouteAndStopRequest) -> operations.DisruptionsGetDisruptionsByRouteAndStopResponse:
        r"""View all disruptions for a particular route and stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/route/{route_id}/stop/{stop_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByRouteAndStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
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

    
    def disruptions_get_disruptions_by_stop(self, request: operations.DisruptionsGetDisruptionsByStopRequest) -> operations.DisruptionsGetDisruptionsByStopResponse:
        r"""View all disruptions for a particular stop
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/disruptions/stop/{stop_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisruptionsGetDisruptionsByStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V3DisruptionsResponse])
                res.v3_disruptions_response = out
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

    