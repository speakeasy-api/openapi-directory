import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MobileApps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one mobile app by ID.
     */
    dfareportingMobileAppsGet(req: operations.DfareportingMobileAppsGetRequest, security: operations.DfareportingMobileAppsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileAppsGetResponse>;
    /**
     * Retrieves list of available mobile apps.
     */
    dfareportingMobileAppsList(req: operations.DfareportingMobileAppsListRequest, security: operations.DfareportingMobileAppsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileAppsListResponse>;
}
