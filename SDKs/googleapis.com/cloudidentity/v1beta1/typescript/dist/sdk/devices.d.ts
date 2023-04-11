import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
     */
    cloudidentityDevicesCreate(req: operations.CloudidentityDevicesCreateRequest, security: operations.CloudidentityDevicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesCreateResponse>;
    /**
     * Approves device to access user data.
     */
    cloudidentityDevicesDeviceUsersApprove(req: operations.CloudidentityDevicesDeviceUsersApproveRequest, security: operations.CloudidentityDevicesDeviceUsersApproveSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersApproveResponse>;
    /**
     * Blocks device from accessing user data
     */
    cloudidentityDevicesDeviceUsersBlock(req: operations.CloudidentityDevicesDeviceUsersBlockRequest, security: operations.CloudidentityDevicesDeviceUsersBlockSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersBlockResponse>;
    /**
     * Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
     */
    cloudidentityDevicesDeviceUsersCancelWipe(req: operations.CloudidentityDevicesDeviceUsersCancelWipeRequest, security: operations.CloudidentityDevicesDeviceUsersCancelWipeSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersCancelWipeResponse>;
    /**
     * Lists/Searches DeviceUsers.
     */
    cloudidentityDevicesDeviceUsersList(req: operations.CloudidentityDevicesDeviceUsersListRequest, security: operations.CloudidentityDevicesDeviceUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersListResponse>;
    /**
     * Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
     */
    cloudidentityDevicesDeviceUsersLookup(req: operations.CloudidentityDevicesDeviceUsersLookupRequest, security: operations.CloudidentityDevicesDeviceUsersLookupSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersLookupResponse>;
    /**
     * Wipes the user's account on a device.
     */
    cloudidentityDevicesDeviceUsersWipe(req: operations.CloudidentityDevicesDeviceUsersWipeRequest, security: operations.CloudidentityDevicesDeviceUsersWipeSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesDeviceUsersWipeResponse>;
    /**
     * Lists/Searches devices.
     */
    cloudidentityDevicesList(req: operations.CloudidentityDevicesListRequest, security: operations.CloudidentityDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudidentityDevicesListResponse>;
}
