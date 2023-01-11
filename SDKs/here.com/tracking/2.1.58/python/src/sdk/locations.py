import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Locations:
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

    
    def delete_locations_v4(self, request: operations.DeleteLocationsV4Request) -> operations.DeleteLocationsV4Response:
        r"""Deletes all locations
        Deletes all locations of the project.
        
        As an extra safety measure, you must also supply x-confirm header with value `true`. If
        the header is not explicitly specified, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locations/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocationsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4400ApplicationJSON])
                res.delete_locations_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4401ApplicationJSON])
                res.delete_locations_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4403ApplicationJSON])
                res.delete_locations_v4_403_application_json_object = out

        return res

    
    def delete_locations_v4_location_id_(self, request: operations.DeleteLocationsV4LocationIDRequest) -> operations.DeleteLocationsV4LocationIDResponse:
        r"""Deletes a location
        Deletes a location.
        
        ***NOTE***: A location can not be deleted if the location is referred by any shipment or
        shipment plan.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locations/v4/{locationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLocationsV4LocationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4LocationID400ApplicationJSON])
                res.delete_locations_v4_location_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4LocationID401ApplicationJSON])
                res.delete_locations_v4_location_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4LocationID403ApplicationJSON])
                res.delete_locations_v4_location_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLocationsV4LocationID404ApplicationJSON])
                res.delete_locations_v4_location_id_404_application_json_object = out

        return res

    
    def get_locations_v4(self, request: operations.GetLocationsV4Request) -> operations.GetLocationsV4Response:
        r"""Lists all locations
        Provides all location definitions of the project in a paginated JSON object.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locations/v4"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4200ApplicationJSON])
                res.get_locations_v4_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4400ApplicationJSON])
                res.get_locations_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4401ApplicationJSON])
                res.get_locations_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4403ApplicationJSON])
                res.get_locations_v4_403_application_json_object = out

        return res

    
    def get_locations_v4_health(self) -> operations.GetLocationsV4HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locations/v4/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsV4HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4Health200ApplicationJSON])
                res.get_locations_v4_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_locations_v4_version(self) -> operations.GetLocationsV4VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locations/v4/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsV4VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_locations_v4_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_locations_v4_location_id_(self, request: operations.GetLocationsV4LocationIDRequest) -> operations.GetLocationsV4LocationIDResponse:
        r"""Gets location details
        Gets details of a specific location.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locations/v4/{locationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsV4LocationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4LocationID200ApplicationJSON])
                res.get_locations_v4_location_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4LocationID400ApplicationJSON])
                res.get_locations_v4_location_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4LocationID401ApplicationJSON])
                res.get_locations_v4_location_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4LocationID403ApplicationJSON])
                res.get_locations_v4_location_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsV4LocationID404ApplicationJSON])
                res.get_locations_v4_location_id_404_application_json_object = out

        return res

    
    def post_locations_v4(self, request: operations.PostLocationsV4Request) -> operations.PostLocationsV4Response:
        r"""Creates a location
        Creates a new location. A location consists of latitude/longitude coordinate pair.
        A name and a free from description of the location may be provided. If this location is
        associated with a geofence, a geofenceId may be provided.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/locations/v4"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLocationsV4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLocationsV4201ApplicationJSON])
                res.post_locations_v4_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLocationsV4400ApplicationJSON])
                res.post_locations_v4_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLocationsV4401ApplicationJSON])
                res.post_locations_v4_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLocationsV4403ApplicationJSON])
                res.post_locations_v4_403_application_json_object = out

        return res

    
    def put_locations_v4_location_id_(self, request: operations.PutLocationsV4LocationIDRequest) -> operations.PutLocationsV4LocationIDResponse:
        r"""Updates location details
        Updates the location details. The old location definition will be replaced, meaning that
        full location body should be provided. After a successful update, the response provides
        updated location details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/locations/v4/{locationId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLocationsV4LocationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLocationsV4LocationID200ApplicationJSON])
                res.put_locations_v4_location_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLocationsV4LocationID400ApplicationJSON])
                res.put_locations_v4_location_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLocationsV4LocationID401ApplicationJSON])
                res.put_locations_v4_location_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLocationsV4LocationID403ApplicationJSON])
                res.put_locations_v4_location_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLocationsV4LocationID404ApplicationJSON])
                res.put_locations_v4_location_id_404_application_json_object = out

        return res

    