import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Managedconfigurationsfordevice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a per-device managed configuration for an app for the specified device.
     */
    androidenterpriseManagedconfigurationsfordeviceDelete(req: operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest, security: operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse>;
    /**
     * Retrieves details of a per-device managed configuration.
     */
    androidenterpriseManagedconfigurationsfordeviceGet(req: operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest, security: operations.AndroidenterpriseManagedconfigurationsfordeviceGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceGetResponse>;
    /**
     * Lists all the per-device managed configurations for the specified device. Only the ID is set.
     */
    androidenterpriseManagedconfigurationsfordeviceList(req: operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest, security: operations.AndroidenterpriseManagedconfigurationsfordeviceListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceListResponse>;
    /**
     * Adds or updates a per-device managed configuration for an app for the specified device.
     */
    androidenterpriseManagedconfigurationsfordeviceUpdate(req: operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest, security: operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse>;
}
