import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Geofence:
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

    
    def delete_geofences_v2(self, request: operations.DeleteGeofencesV2Request) -> operations.DeleteGeofencesV2Response:
        r"""Deletes all geofences
        Deletes all geofences created by the provided user account.
        
        If some geofences are used in rules, for example, a \"stock\" rule includes a geofence ID to indicate
        the stock location, then the rules are also deleted together with the geofences.
        
        As an extra safety measure, you must also supply the header `x-confirm`
        with the value `true`. If this header is not explicitly specified on a
        **Delete All** request, the request fails.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences/v2"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGeofencesV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2400ApplicationJSON])
                res.delete_geofences_v2_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2401ApplicationJSON])
                res.delete_geofences_v2_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2403ApplicationJSON])
                res.delete_geofences_v2_403_application_json_object = out

        return res

    
    def delete_geofences_v2_geofence_id_(self, request: operations.DeleteGeofencesV2GeofenceIDRequest) -> operations.DeleteGeofencesV2GeofenceIDResponse:
        r"""Deletes a geofence
        Deletes a single geofence definition based on the provided geofence ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/v2/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGeofencesV2GeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2GeofenceID400ApplicationJSON])
                res.delete_geofences_v2_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2GeofenceID401ApplicationJSON])
                res.delete_geofences_v2_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2GeofenceID403ApplicationJSON])
                res.delete_geofences_v2_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2GeofenceID404ApplicationJSON])
                res.delete_geofences_v2_geofence_id_404_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteGeofencesV2GeofenceID409ApplicationJSON])
                res.delete_geofences_v2_geofence_id_409_application_json_object = out

        return res

    
    def get_geofences_v2_health(self) -> operations.GetGeofencesV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofencesV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2Health200ApplicationJSON])
                res.get_geofences_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_geofences_v2_version(self) -> operations.GetGeofencesV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofencesV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_geofences_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_geofences_v2_geofence_id_(self, request: operations.GetGeofencesV2GeofenceIDRequest) -> operations.GetGeofencesV2GeofenceIDResponse:
        r"""Gets a single geofence
        Provides the details of a single geofence definition such as the shape,
        name and description.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/v2/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeofencesV2GeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2GeofenceID200ApplicationJSON])
                res.get_geofences_v2_geofence_id_200_application_json_object = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2GeofenceID400ApplicationJSON])
                res.get_geofences_v2_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2GeofenceID401ApplicationJSON])
                res.get_geofences_v2_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2GeofenceID403ApplicationJSON])
                res.get_geofences_v2_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGeofencesV2GeofenceID404ApplicationJSON])
                res.get_geofences_v2_geofence_id_404_application_json_object = out

        return res

    
    def post_geofences_v2(self, request: operations.PostGeofencesV2Request) -> operations.PostGeofencesV2Response:
        r"""Creates a geofence
        You can specify a geofence as a circle, as a polygon or as POI (Point of Interest). You can also assign a name and a description to each geofence to help identify them.
        
        Circle
        ---
        
        Specify the coordinates of the center point of the circle and a radius in
        meters.
        
        ```json
            {
              \"name\": \"Home\",
              \"type\": \"circle\",
              \"definition\": {
                \"center\": {
                  \"lat\": 52.5308398,
                  \"lng\": 13.38490035
                },
                \"radius\": 100
              },
              \"description\": \"Small area around my house.\"
            }
        ```
        
        Polygon
        ---
        
        Specify an array of points. A minimum of three points are required.
        
        *NOTE: If the points do not describe a closed polygon, the polygon is
        automatically closed between the last and first points.*
        
        ```json
            {
              \"name\": \"Work\",
              \"type\": \"polygon\",
              \"definition\": {
                \"points\": [{
                  \"lat\": 52.5308398,
                  \"lng\": 13.38490035
                }, {
                  \"lat\": 52.530443,
                  \"lng\": 13.38482003
                }, {
                  \"lat\": 52.5308298,
                  \"lng\": 13.38492235
                }]
              },
              \"description\": \"The area around work.\"
            }
        ```
        Indoor geofence
        ---
        In addition to previous definition, you can also define the floor properties of the geofence.
        ```json
            {
              \"name\": \"Office indoor\",
              \"type\": \"circle\",
              \"definition\": {
                \"center\": {
                  \"lat\": 52.5308398,
                  \"lng\": 13.38490035
                },
                \"radius\": 20,
                \"floor\": {
                  \"level\": 2,
                  \"id\": \"DM_1234\"
                  \"name\": \"Office floor 2\"
                }
              },
              \"description\": \"Floor 2 of the office.\"
            }
        
        ```
        POI geofence
        ---
        
        Specify details of the POI geofence. POI geofence needs to be trained separately so that POI geofence events can be evaluated.
        ```json
            {
              \"name\": \"POI room in the office\",
              \"type\": \"poi\",
              \"definition\": {
                \"location\": {
                  \"room\": ROOM_201,
                  \"address\": Invalidenstrasse 116,
                  \"country\": Germany,
                  \"position\": {
                    \"lat\": 52.5308398,
                    \"lng\": 13.38490035
                  }
                },
                \"floor\": {
                  \"level\": 2,
                  \"id\": \"DM_1234\"
                  \"name\": \"Office floor 2\"
                }
              },
              \"description\": \"A room where things should be delivered.\"
            }
        ```
        
        Successful requests have the HTTP status 201 and the response body provides
        the ID of the created geofence.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences/v2"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeofencesV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2201ApplicationJSON])
                res.post_geofences_v2_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2400ApplicationJSON])
                res.post_geofences_v2_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2401ApplicationJSON])
                res.post_geofences_v2_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2403ApplicationJSON])
                res.post_geofences_v2_403_application_json_object = out

        return res

    
    def post_geofences_v2_training_test(self, request: operations.PostGeofencesV2TrainingTestRequest) -> operations.PostGeofencesV2TrainingTestResponse:
        r"""Checks if the POI geofence training is possible with the given parameters
        Checks if the POI training is possible with the given device and parameters. The body should either
        provide timestamps and tracking ID related to a trace point to be used as a POI training sample or a WLAN-scan.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geofences/v2/trainingTest"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeofencesV2TrainingTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest200ApplicationJSON])
                res.post_geofences_v2_training_test_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest400ApplicationJSON])
                res.post_geofences_v2_training_test_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest401ApplicationJSON])
                res.post_geofences_v2_training_test_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest403ApplicationJSON])
                res.post_geofences_v2_training_test_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest404ApplicationJSON])
                res.post_geofences_v2_training_test_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2TrainingTest422ApplicationJSON])
                res.post_geofences_v2_training_test_422_application_json_object = out

        return res

    
    def post_geofences_v2_geofence_id_poi_training(self, request: operations.PostGeofencesV2GeofenceIDPoiTrainingRequest) -> operations.PostGeofencesV2GeofenceIDPoiTrainingResponse:
        r"""Trains a POI geofence
        Trains a POI geofence using device telemetry. The telemetry used for training can be defined by specifying a
        tracking ID and a time range. These parameters define the time when the device has been in the desired point of interest.
        Only telemetries that have been ingested during the last 24 hours can be used in the training.
        
        Optionally, a WLAN-scan be used for training.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/v2/{geofenceId}/poiTraining", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeofencesV2GeofenceIDPoiTrainingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining200ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining400ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining401ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining403ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining404ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_404_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostGeofencesV2GeofenceIDPoiTraining422ApplicationJSON])
                res.post_geofences_v2_geofence_id_poi_training_422_application_json_object = out

        return res

    
    def put_geofences_v2_geofence_id_(self, request: operations.PutGeofencesV2GeofenceIDRequest) -> operations.PutGeofencesV2GeofenceIDResponse:
        r"""Updates a single geofence
        Updates the geofence shape, name or description. The old geofence definition will be replaced, meaning that full geofence body should be provided. POI geofence cannot be updated to circle or polygon geofences and vice versa. After a successful update, the response provides updated geofence details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geofences/v2/{geofenceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutGeofencesV2GeofenceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofencesV2GeofenceID200ApplicationJSON])
                res.put_geofences_v2_geofence_id_200_application_json_object = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofencesV2GeofenceID400ApplicationJSON])
                res.put_geofences_v2_geofence_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofencesV2GeofenceID401ApplicationJSON])
                res.put_geofences_v2_geofence_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofencesV2GeofenceID403ApplicationJSON])
                res.put_geofences_v2_geofence_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutGeofencesV2GeofenceID404ApplicationJSON])
                res.put_geofences_v2_geofence_id_404_application_json_object = out

        return res

    