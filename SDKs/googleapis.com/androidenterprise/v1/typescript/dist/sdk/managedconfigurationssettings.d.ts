import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Managedconfigurationssettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all the managed configurations settings for the specified app.
     */
    androidenterpriseManagedconfigurationssettingsList(req: operations.AndroidenterpriseManagedconfigurationssettingsListRequest, security: operations.AndroidenterpriseManagedconfigurationssettingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationssettingsListResponse>;
}
