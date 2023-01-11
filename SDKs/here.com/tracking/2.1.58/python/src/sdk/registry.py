import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Registry:
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

    
    def delete_registry_v2_devices_device_or_external_id_(self, request: operations.DeleteRegistryV2DevicesDeviceOrExternalIDRequest) -> operations.DeleteRegistryV2DevicesDeviceOrExternalIDResponse:
        r"""Deactivates a device.
        Deactivate a provisioned device. This operation will deactivate the device credentials,
        meaning that no device token can be fetched for the deactivated device and deviceId cannot
        be used for claiming anymore.
        
        NOTE: The device must be unclaimed before it can be deactivated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/devices/{deviceOrExternalId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRegistryV2DevicesDeviceOrExternalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2DevicesDeviceOrExternalID400ApplicationJSON])
                res.delete_registry_v2_devices_device_or_external_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2DevicesDeviceOrExternalID401ApplicationJSON])
                res.delete_registry_v2_devices_device_or_external_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2DevicesDeviceOrExternalID403ApplicationJSON])
                res.delete_registry_v2_devices_device_or_external_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2DevicesDeviceOrExternalID404ApplicationJSON])
                res.delete_registry_v2_devices_device_or_external_id_404_application_json_object = out

        return res

    
    def delete_registry_v2_tracking_id_(self, request: operations.DeleteRegistryV2TrackingIDRequest) -> operations.DeleteRegistryV2TrackingIDResponse:
        r"""Unclaims a device
        Removes the association between the user and the device. The device is no longer able to generate data for the user and can now be registered by another user (or the same user again).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRegistryV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2TrackingID400ApplicationJSON])
                res.delete_registry_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2TrackingID401ApplicationJSON])
                res.delete_registry_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2TrackingID403ApplicationJSON])
                res.delete_registry_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteRegistryV2TrackingID404ApplicationJSON])
                res.delete_registry_v2_tracking_id_404_application_json_object = out

        return res

    
    def get_registry_v2_devices_device_or_external_id_(self, request: operations.GetRegistryV2DevicesDeviceOrExternalIDRequest) -> operations.GetRegistryV2DevicesDeviceOrExternalIDResponse:
        r"""Gets the trackingId for a device
        When provided with a deviceId, this endpoint returns the tracking ID for a previously claimed device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/devices/{deviceOrExternalId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2DevicesDeviceOrExternalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2DevicesDeviceOrExternalID200ApplicationJSON])
                res.get_registry_v2_devices_device_or_external_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2DevicesDeviceOrExternalID400ApplicationJSON])
                res.get_registry_v2_devices_device_or_external_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2DevicesDeviceOrExternalID401ApplicationJSON])
                res.get_registry_v2_devices_device_or_external_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2DevicesDeviceOrExternalID403ApplicationJSON])
                res.get_registry_v2_devices_device_or_external_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2DevicesDeviceOrExternalID404ApplicationJSON])
                res.get_registry_v2_devices_device_or_external_id_404_application_json_object = out

        return res

    
    def get_registry_v2_health(self) -> operations.GetRegistryV2HealthResponse:
        r"""Gets service health
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/registry/v2/health"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2HealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Health200ApplicationJSON])
                res.get_registry_v2_health_200_application_json_object = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_registry_v2_licenses(self, request: operations.GetRegistryV2LicensesRequest) -> operations.GetRegistryV2LicensesResponse:
        r"""Gets tracking cloud license information
        Get tracking cloud license information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/registry/v2/licenses"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2LicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Licenses200ApplicationJSON])
                res.get_registry_v2_licenses_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Licenses400ApplicationJSON])
                res.get_registry_v2_licenses_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Licenses401ApplicationJSON])
                res.get_registry_v2_licenses_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Licenses403ApplicationJSON])
                res.get_registry_v2_licenses_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2Licenses404ApplicationJSON])
                res.get_registry_v2_licenses_404_application_json_object = out

        return res

    
    def get_registry_v2_version(self) -> operations.GetRegistryV2VersionResponse:
        r"""Gets service version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/registry/v2/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2VersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_registry_v2_version_200_application_json_any = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_registry_v2_app_id_devices(self, request: operations.GetRegistryV2AppIDDevicesRequest) -> operations.GetRegistryV2AppIDDevicesResponse:
        r"""Gets all devices provisioned by the vendor for the given appId
        Provides an array of the device ids provisioned by the vendor for the given appId.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{appId}/devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2AppIDDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDDevices200ApplicationJSON])
                res.get_registry_v2_app_id_devices_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDDevices400ApplicationJSON])
                res.get_registry_v2_app_id_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDDevices401ApplicationJSON])
                res.get_registry_v2_app_id_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDDevices403ApplicationJSON])
                res.get_registry_v2_app_id_devices_403_application_json_object = out

        return res

    
    def get_registry_v2_app_id_license_count(self, request: operations.GetRegistryV2AppIDLicenseCountRequest) -> operations.GetRegistryV2AppIDLicenseCountResponse:
        r"""Gets count of created licenses for a given vendor's app id
        Retrieves the count of already created licenses
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{appId}/licenseCount", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2AppIDLicenseCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDLicenseCount200ApplicationJSON])
                res.get_registry_v2_app_id_license_count_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDLicenseCount400ApplicationJSON])
                res.get_registry_v2_app_id_license_count_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDLicenseCount401ApplicationJSON])
                res.get_registry_v2_app_id_license_count_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDLicenseCount403ApplicationJSON])
                res.get_registry_v2_app_id_license_count_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2AppIDLicenseCount404ApplicationJSON])
                res.get_registry_v2_app_id_license_count_404_application_json_object = out

        return res

    
    def get_registry_v2_job_id_results(self, request: operations.GetRegistryV2JobIDResultsRequest) -> operations.GetRegistryV2JobIDResultsResponse:
        r"""Gets the job results
        This returns the results of the given batch job if the job has completed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{jobId}/results", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2JobIDResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDResults200ApplicationJSON])
                res.get_registry_v2_job_id_results_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDResults400ApplicationJSON])
                res.get_registry_v2_job_id_results_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDResults401ApplicationJSON])
                res.get_registry_v2_job_id_results_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDResults403ApplicationJSON])
                res.get_registry_v2_job_id_results_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDResults404ApplicationJSON])
                res.get_registry_v2_job_id_results_404_application_json_object = out

        return res

    
    def get_registry_v2_job_id_status(self, request: operations.GetRegistryV2JobIDStatusRequest) -> operations.GetRegistryV2JobIDStatusResponse:
        r"""Gets the job status
        Use this endpoint to check the progress of a previously created
        credentials request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{jobId}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2JobIDStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDStatus200ApplicationJSON])
                res.get_registry_v2_job_id_status_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDStatus400ApplicationJSON])
                res.get_registry_v2_job_id_status_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDStatus401ApplicationJSON])
                res.get_registry_v2_job_id_status_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDStatus403ApplicationJSON])
                res.get_registry_v2_job_id_status_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2JobIDStatus404ApplicationJSON])
                res.get_registry_v2_job_id_status_404_application_json_object = out

        return res

    
    def get_registry_v2_tracking_id_(self, request: operations.GetRegistryV2TrackingIDRequest) -> operations.GetRegistryV2TrackingIDResponse:
        r"""Gets the deviceId
        When provided with a trackingId, this endpoint returns the deviceId for a previously claimed device.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{trackingId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistryV2TrackingIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2TrackingID200ApplicationJSON])
                res.get_registry_v2_tracking_id_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2TrackingID400ApplicationJSON])
                res.get_registry_v2_tracking_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2TrackingID401ApplicationJSON])
                res.get_registry_v2_tracking_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2TrackingID403ApplicationJSON])
                res.get_registry_v2_tracking_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegistryV2TrackingID404ApplicationJSON])
                res.get_registry_v2_tracking_id_404_application_json_object = out

        return res

    
    def post_registry_v2_app_id_devices(self, request: operations.PostRegistryV2AppIDDevicesRequest) -> operations.PostRegistryV2AppIDDevicesResponse:
        r"""Creates credentials for multiple devices
        Starts a batch job to create credentials for either physical devices or virtual devices. Virtual devices are meant for cloud-to-cloud use case.
        Credentials for physical devices are deviceId and deviceSecret. Batch job creates number of physical devices specified by the 'count' parameter in the request body.
        Virtual devices are identified with an external device ID and request sender's appId. The virtual device external ID is application specific and user is free to allocate it as user finds suitable. The external IDs for the virtual devices to be created are specified in the 'devices' array in request body. For virtual devices the response contains only deviceId, no deviceSecret.
        The autoclaim parameter can only be used when creating virtual devices. If autoclaim=true, the created virtual devices are immediately bound to the requesting account. In this case the response contains also external IDs and tracking IDs for the claimed devices.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{appId}/devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRegistryV2AppIDDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDDevices202ApplicationJSON])
                res.post_registry_v2_app_id_devices_202_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDDevices400ApplicationJSON])
                res.post_registry_v2_app_id_devices_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDDevices401ApplicationJSON])
                res.post_registry_v2_app_id_devices_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDDevices403ApplicationJSON])
                res.post_registry_v2_app_id_devices_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDDevices404ApplicationJSON])
                res.post_registry_v2_app_id_devices_404_application_json_object = out

        return res

    
    def post_registry_v2_app_id_one_device(self, request: operations.PostRegistryV2AppIDOneDeviceRequest) -> operations.PostRegistryV2AppIDOneDeviceResponse:
        r"""Creates credentials for a single device
        The credentials will be created. The ID and secret will instantly be returned in the body.
        
        If autoclaim=true, the created device is immediately bound to the requesting account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/{appId}/one-device", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRegistryV2AppIDOneDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDOneDevice201ApplicationJSON])
                res.post_registry_v2_app_id_one_device_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDOneDevice400ApplicationJSON])
                res.post_registry_v2_app_id_one_device_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDOneDevice401ApplicationJSON])
                res.post_registry_v2_app_id_one_device_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDOneDevice403ApplicationJSON])
                res.post_registry_v2_app_id_one_device_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRegistryV2AppIDOneDevice404ApplicationJSON])
                res.post_registry_v2_app_id_one_device_404_application_json_object = out

        return res

    
    def put_registry_v2_devices_device_or_external_id_(self, request: operations.PutRegistryV2DevicesDeviceOrExternalIDRequest) -> operations.PutRegistryV2DevicesDeviceOrExternalIDResponse:
        r"""Claims a device
        Claim a device to a user. Before a device is claimed, it cannot complete
        login and any data sent to the ingestion endpoint will be ignored. Once a
        device is claimed, its data is stored and available to its owner.
        
        When a device is claimed, it will be assigned a trackingID. This is the
        identifier in HERE Tracking that the data is associated with. Having a
        separate deviceId and trackingId means that devices can have their ownership
        transferred without having to create and install a new deviceId and
        deviceSecret.
        
        Only users with a valid Tracking license are authorized to claim
        new devices. Claimed devices must be associated with owner
        application ID, which is used when incrementing device usage
        for billing purposes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registry/v2/devices/{deviceOrExternalId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRegistryV2DevicesDeviceOrExternalIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID200ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_200_application_json_object = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID201ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_201_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID400ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID401ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_401_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID403ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID404ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_404_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutRegistryV2DevicesDeviceOrExternalID409ApplicationJSON])
                res.put_registry_v2_devices_device_or_external_id_409_application_json_object = out

        return res

    