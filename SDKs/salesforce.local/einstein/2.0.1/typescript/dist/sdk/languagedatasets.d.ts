import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage text datasets.
 */
export declare class LanguageDatasets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Dataset
     *
     * @remarks
     * Deletes the specified dataset and associated labels and examples.
     */
    deleteDataset(req: operations.DeleteDatasetRequest, security: operations.DeleteDatasetSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * Get Deletion Status
     *
     * @remarks
     * Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
     */
    get(req: operations.GetRequest, security: operations.GetSecurity, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Get a Dataset
     *
     * @remarks
     * Returns a single dataset.
     */
    getDataset(req: operations.GetDatasetRequest, security: operations.GetDatasetSecurity, config?: AxiosRequestConfig): Promise<operations.GetDatasetResponse>;
    /**
     * Get All Datasets
     *
     * @remarks
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
     */
    listDatasets(req: operations.ListDatasetsRequest, security: operations.ListDatasetsSecurity, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * Create a Dataset From a File Asynchronously
     *
     * @remarks
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.
     */
    uploadDatasetAsync(req: operations.UploadDatasetAsyncRequestBody, security: operations.UploadDatasetAsyncSecurity, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsyncResponse>;
    /**
     * Create a Dataset From a File Synchronously
     *
     * @remarks
     * Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.
     */
    uploadDatasetSync(req: operations.UploadDatasetSyncRequestBody, security: operations.UploadDatasetSyncSecurity, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSyncResponse>;
}
