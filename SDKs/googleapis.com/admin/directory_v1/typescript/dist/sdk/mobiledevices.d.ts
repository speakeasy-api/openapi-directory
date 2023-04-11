import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mobiledevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Takes an action that affects a mobile device. For example, remotely wiping a device.
     */
    directoryMobiledevicesAction(req: operations.DirectoryMobiledevicesActionRequest, security: operations.DirectoryMobiledevicesActionSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesActionResponse>;
    /**
     * Removes a mobile device.
     */
    directoryMobiledevicesDelete(req: operations.DirectoryMobiledevicesDeleteRequest, security: operations.DirectoryMobiledevicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesDeleteResponse>;
    /**
     * Retrieves a mobile device's properties.
     */
    directoryMobiledevicesGet(req: operations.DirectoryMobiledevicesGetRequest, security: operations.DirectoryMobiledevicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesGetResponse>;
    /**
     * Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
     */
    directoryMobiledevicesList(req: operations.DirectoryMobiledevicesListRequest, security: operations.DirectoryMobiledevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesListResponse>;
}
