import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1beta1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns customer-level settings.
     */
    alertcenterGetSettings(req: operations.AlertcenterGetSettingsRequest, security: operations.AlertcenterGetSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterGetSettingsResponse>;
    /**
     * Updates the customer-level settings.
     */
    alertcenterUpdateSettings(req: operations.AlertcenterUpdateSettingsRequest, security: operations.AlertcenterUpdateSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterUpdateSettingsResponse>;
}
