import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstanceSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Instance settings.
     */
    computeInstanceSettingsGet(req: operations.ComputeInstanceSettingsGetRequest, security: operations.ComputeInstanceSettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceSettingsGetResponse>;
    /**
     * Patch Instance settings
     */
    computeInstanceSettingsPatch(req: operations.ComputeInstanceSettingsPatchRequest, security: operations.ComputeInstanceSettingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceSettingsPatchResponse>;
}
