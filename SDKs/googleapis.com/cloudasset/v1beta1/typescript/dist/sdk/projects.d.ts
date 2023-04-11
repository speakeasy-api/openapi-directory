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
     * Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
     */
    cloudassetProjectsBatchGetAssetsHistory(req: operations.CloudassetProjectsBatchGetAssetsHistoryRequest, security: operations.CloudassetProjectsBatchGetAssetsHistorySecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetProjectsBatchGetAssetsHistoryResponse>;
    /**
     * Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
     */
    cloudassetProjectsExportAssets(req: operations.CloudassetProjectsExportAssetsRequest, security: operations.CloudassetProjectsExportAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetProjectsExportAssetsResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    cloudassetProjectsOperationsGet(req: operations.CloudassetProjectsOperationsGetRequest, security: operations.CloudassetProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetProjectsOperationsGetResponse>;
}
