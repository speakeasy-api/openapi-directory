import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Associates the device with the gateway.
     */
    cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest, security: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse>;
    /**
     * Creates a device registry that contains devices.
     */
    cloudiotProjectsLocationsRegistriesCreate(req: operations.CloudiotProjectsLocationsRegistriesCreateRequest, security: operations.CloudiotProjectsLocationsRegistriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesCreateResponse>;
    /**
     * Lists the last few versions of the device configuration in descending order (i.e.: newest first).
     */
    cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList(req: operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse>;
    /**
     * Creates a device in a device registry.
     */
    cloudiotProjectsLocationsRegistriesDevicesCreate(req: operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse>;
    /**
     * Deletes a device.
     */
    cloudiotProjectsLocationsRegistriesDevicesDelete(req: operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse>;
    /**
     * Gets details about a device.
     */
    cloudiotProjectsLocationsRegistriesDevicesGet(req: operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse>;
    /**
     * Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
     */
    cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig(req: operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse>;
    /**
     * Updates a device.
     */
    cloudiotProjectsLocationsRegistriesDevicesPatch(req: operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse>;
    /**
     * Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
     */
    cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice(req: operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse>;
    /**
     * Lists the last few versions of the device state in descending order (i.e.: newest first).
     */
    cloudiotProjectsLocationsRegistriesDevicesStatesList(req: operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest, security: operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse>;
    /**
     * List devices in a device registry.
     */
    cloudiotProjectsLocationsRegistriesGroupsDevicesList(req: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest, security: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest, security: operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy(req: operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest, security: operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
     */
    cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions(req: operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest, security: operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse>;
    /**
     * Lists device registries.
     */
    cloudiotProjectsLocationsRegistriesList(req: operations.CloudiotProjectsLocationsRegistriesListRequest, security: operations.CloudiotProjectsLocationsRegistriesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesListResponse>;
    /**
     * Deletes the association between the device and the gateway.
     */
    cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway(req: operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest, security: operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity, config?: AxiosRequestConfig): Promise<operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse>;
}
