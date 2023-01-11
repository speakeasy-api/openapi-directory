import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class GroupConfigurationLocations:
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

    
    def create_location(self, request: operations.CreateLocationRequest) -> operations.CreateLocationResponse:
        r"""Create new Location
        Create a new location for a group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/locations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationResult])
                res.location_result = out

        return res

    
    def edit_location(self, request: operations.EditLocationRequest) -> operations.EditLocationResponse:
        r"""Edit a Location
        Edit a location based on the ID provided. The version parameter must match the latest location version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/locations/{location_id}/{version}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationResult])
                res.location_result = out

        return res

    
    def get_location(self, request: operations.GetLocationRequest) -> operations.GetLocationResponse:
        r"""Get Location
        Returns the latest version of a single location based on the ID provided.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/locations/{location_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationResult])
                res.location_result = out

        return res

    
    def get_location_list(self, request: operations.GetLocationListRequest) -> operations.GetLocationListResponse:
        r"""Get all Group Locations
        Returns a list of all locations for a given group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/groups/{group_id}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedLocationResult])
                res.paginated_location_result = out

        return res

    