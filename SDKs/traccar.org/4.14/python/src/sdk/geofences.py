import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Geofences:
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

    
    def delete_geofences_id_(self, request: operations.DeleteGeofencesIDRequest) -> operations.DeleteGeofencesIDResponse:
        r"""Delete a Geofence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGeofencesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_geofences(self, request: operations.GetGeofencesRequest) -> operations.GetGeofencesResponse:
        r"""Fetch a list of Geofences
        Without params, it returns a list of Geofences the user has access to
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Geofence]])
                res.geofences = out

        return res

    
    def post_geofences(self, request: operations.PostGeofencesRequest) -> operations.PostGeofencesResponse:
        r"""Create a Geofence
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeofencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Geofence])
                res.geofence = out

        return res

    
    def put_geofences_id_(self, request: operations.PutGeofencesIDRequest) -> operations.PutGeofencesIDResponse:
        r"""Update a Geofence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutGeofencesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Geofence])
                res.geofence = out

        return res

    