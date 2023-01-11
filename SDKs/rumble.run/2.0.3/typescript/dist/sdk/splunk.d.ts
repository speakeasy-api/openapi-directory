import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Splunk {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * splunkAssetSyncCreatedJson - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
    **/
    splunkAssetSyncCreatedJson(req: operations.SplunkAssetSyncCreatedJsonRequest, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncCreatedJsonResponse>;
    /**
     * splunkAssetSyncUpdatedJson - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
    **/
    splunkAssetSyncUpdatedJson(req: operations.SplunkAssetSyncUpdatedJsonRequest, config?: AxiosRequestConfig): Promise<operations.SplunkAssetSyncUpdatedJsonResponse>;
}
