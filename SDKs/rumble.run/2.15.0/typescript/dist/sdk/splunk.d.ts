import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Splunk {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
     */
    splunkAssetSyncCreatedJSON(req: operations.SplunkAssetSyncCreatedJSONRequest, security: operations.SplunkAssetSyncCreatedJSONSecurity, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncCreatedJSONResponse>;
    /**
     * Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
     */
    splunkAssetSyncUpdatedJSON(req: operations.SplunkAssetSyncUpdatedJSONRequest, security: operations.SplunkAssetSyncUpdatedJSONSecurity, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncUpdatedJSONResponse>;
}
