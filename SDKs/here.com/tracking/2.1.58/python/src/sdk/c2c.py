import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class C2C:
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

    
    def delete_c2c_v4_connectors_connector_id_(self, request: operations.DeleteC2cV4ConnectorsConnectorIDRequest) -> operations.DeleteC2cV4ConnectorsConnectorIDResponse:
        r"""Deletes connector object
        Deletes connector object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteC2cV4ConnectorsConnectorIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorID400ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorID401ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorID403ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorID404ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_404_application_json_object = out

        return res

    
    def delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_(self, request: operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDRequest) -> operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDResponse:
        r"""Removes an external device from the connector
        Removes an external device from the connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}/ext-devices/{externalDeviceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID400ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID401ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID403ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteC2cV4ConnectorsConnectorIDExtDevicesExternalDeviceID404ApplicationJSON])
                res.delete_c2c_v4_connectors_connector_id_ext_devices_external_device_id_404_application_json_object = out

        return res

    
    def get_c2c_v4_connectors(self, request: operations.GetC2cV4ConnectorsRequest) -> operations.GetC2cV4ConnectorsResponse:
        r"""Gets list of connectors
        Gets list of connectors for the project.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/connectors"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4ConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Connectors200ApplicationJSON])
                res.get_c2c_v4_connectors_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Connectors400ApplicationJSON])
                res.get_c2c_v4_connectors_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Connectors401ApplicationJSON])
                res.get_c2c_v4_connectors_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Connectors403ApplicationJSON])
                res.get_c2c_v4_connectors_403_application_json_object = out

        return res

    
    def get_c2c_v4_connectors_ext_devices_external_device_id_(self, request: operations.GetC2cV4ConnectorsExtDevicesExternalDeviceIDRequest) -> operations.GetC2cV4ConnectorsExtDevicesExternalDeviceIDResponse:
        r"""Gets connector identifiers for an external device
        Gets identifiers for connectors to which an external device belongs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/ext-devices/{externalDeviceId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4ConnectorsExtDevicesExternalDeviceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsExtDevicesExternalDeviceID200ApplicationJSON])
                res.get_c2c_v4_connectors_ext_devices_external_device_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsExtDevicesExternalDeviceID400ApplicationJSON])
                res.get_c2c_v4_connectors_ext_devices_external_device_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsExtDevicesExternalDeviceID401ApplicationJSON])
                res.get_c2c_v4_connectors_ext_devices_external_device_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsExtDevicesExternalDeviceID403ApplicationJSON])
                res.get_c2c_v4_connectors_ext_devices_external_device_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsExtDevicesExternalDeviceID404ApplicationJSON])
                res.get_c2c_v4_connectors_ext_devices_external_device_id_404_application_json_object = out

        return res

    
    def get_c2c_v4_connectors_connector_id_(self, request: operations.GetC2cV4ConnectorsConnectorIDRequest) -> operations.GetC2cV4ConnectorsConnectorIDResponse:
        r"""Gets connector info
        Gets connector info for the specified connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4ConnectorsConnectorIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDConnectorInfo])
                res.connector_info = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorID400ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorID401ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorID403ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorID404ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_404_application_json_object = out

        return res

    
    def get_c2c_v4_connectors_connector_id_ext_devices(self, request: operations.GetC2cV4ConnectorsConnectorIDExtDevicesRequest) -> operations.GetC2cV4ConnectorsConnectorIDExtDevicesResponse:
        r"""Gets all external devices under the connector
        Gets all external devices under the connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}/ext-devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4ConnectorsConnectorIDExtDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDExtDevices200ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_ext_devices_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_ext_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_ext_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_ext_devices_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON])
                res.get_c2c_v4_connectors_connector_id_ext_devices_404_application_json_object = out

        return res

    
    def get_c2c_v4_drivers(self, request: operations.GetC2cV4DriversRequest) -> operations.GetC2cV4DriversResponse:
        r"""Lists cloud drivers
        Gets all cloud drivers that a user is authorized to use.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/drivers"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4DriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Drivers200ApplicationJSON])
                res.get_c2c_v4_drivers_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Drivers400ApplicationJSON])
                res.get_c2c_v4_drivers_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Drivers401ApplicationJSON])
                res.get_c2c_v4_drivers_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Drivers403ApplicationJSON])
                res.get_c2c_v4_drivers_403_application_json_object = out

        return res

    
    def get_c2c_v4_health(self) -> operations.GetC2cV4HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetC2cV4Health200ApplicationJSON])
                res.get_c2c_v4_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_c2c_v4_version(self) -> operations.GetC2cV4VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetC2cV4VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_c2c_v4_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_c2c_v4_callback(self, request: operations.PostC2cV4CallbackRequest) -> operations.PostC2cV4CallbackResponse:
        r"""Receives external device update reports
        External clouds can call this endpoint through their callback mechanism to report device updates. The format of the payload is driver specific.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/callback"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostC2cV4CallbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Callback400ApplicationJSON])
                res.post_c2c_v4_callback_400_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Callback404ApplicationJSON])
                res.post_c2c_v4_callback_404_application_json_object = out
        elif r.status_code == 501:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Callback501ApplicationJSON])
                res.post_c2c_v4_callback_501_application_json_object = out

        return res

    
    def post_c2c_v4_connectors(self, request: operations.PostC2cV4ConnectorsRequest) -> operations.PostC2cV4ConnectorsResponse:
        r"""Registers a connector object
        Registers a connector for a source external cloud using the passed external cloud credentials, destination HERE project ID, and sync driver ID.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/c2c/v4/connectors"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostC2cV4ConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_c2c_v4_connectors_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Connectors400ApplicationJSON])
                res.post_c2c_v4_connectors_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Connectors401ApplicationJSON])
                res.post_c2c_v4_connectors_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Connectors403ApplicationJSON])
                res.post_c2c_v4_connectors_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Connectors404ApplicationJSON])
                res.post_c2c_v4_connectors_404_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4Connectors409ApplicationJSON])
                res.post_c2c_v4_connectors_409_application_json_object = out

        return res

    
    def post_c2c_v4_connectors_connector_id_ext_devices(self, request: operations.PostC2cV4ConnectorsConnectorIDExtDevicesRequest) -> operations.PostC2cV4ConnectorsConnectorIDExtDevicesResponse:
        r"""Adds external devices to the connector
        Adds external devices to the connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}/ext-devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostC2cV4ConnectorsConnectorIDExtDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4ConnectorsConnectorIDExtDevices400ApplicationJSON])
                res.post_c2c_v4_connectors_connector_id_ext_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4ConnectorsConnectorIDExtDevices401ApplicationJSON])
                res.post_c2c_v4_connectors_connector_id_ext_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4ConnectorsConnectorIDExtDevices403ApplicationJSON])
                res.post_c2c_v4_connectors_connector_id_ext_devices_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostC2cV4ConnectorsConnectorIDExtDevices404ApplicationJSON])
                res.post_c2c_v4_connectors_connector_id_ext_devices_404_application_json_object = out

        return res

    
    def put_c2c_v4_connectors_connector_id_(self, request: operations.PutC2cV4ConnectorsConnectorIDRequest) -> operations.PutC2cV4ConnectorsConnectorIDResponse:
        r"""Updates connector info
        Updates the connector info.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/c2c/v4/connectors/{connectorId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutC2cV4ConnectorsConnectorIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.put_c2c_v4_connectors_connector_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutC2cV4ConnectorsConnectorID400ApplicationJSON])
                res.put_c2c_v4_connectors_connector_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutC2cV4ConnectorsConnectorID401ApplicationJSON])
                res.put_c2c_v4_connectors_connector_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutC2cV4ConnectorsConnectorID403ApplicationJSON])
                res.put_c2c_v4_connectors_connector_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutC2cV4ConnectorsConnectorID404ApplicationJSON])
                res.put_c2c_v4_connectors_connector_id_404_application_json_object = out

        return res

    