import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage image datasets.
 */
export declare class VisionDatasets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Dataset
     *
     * @remarks
     * Creates a dataset and labels, if they're specified.
     */
    createDataset(req: operations.CreateDatasetRequestBody, security: operations.CreateDatasetSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * Delete a Dataset
     *
     * @remarks
     * Deletes the specified dataset and associated labels and examples.
     */
    deleteDataset1(req: operations.DeleteDataset1Request, security: operations.DeleteDataset1Security, config?: AxiosRequestConfig): Promise<operations.DeleteDataset1Response>;
    /**
     * Get a Dataset
     *
     * @remarks
     * Returns a single dataset.
     */
    getDataset1(req: operations.GetDataset1Request, security: operations.GetDataset1Security, config?: AxiosRequestConfig): Promise<operations.GetDataset1Response>;
    /**
     * Get Deletion Status
     *
     * @remarks
     * Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.
     */
    get1(req: operations.Get1Request, security: operations.Get1Security, config?: AxiosRequestConfig): Promise<operations.Get1Response>;
    /**
     * Get All Datasets
     *
     * @remarks
     * Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.
     */
    listDatasets1(req: operations.ListDatasets1Request, security: operations.ListDatasets1Security, config?: AxiosRequestConfig): Promise<operations.ListDatasets1Response>;
    /**
     * Create a Dataset From a Zip File Asynchronously
     *
     * @remarks
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.
     */
    uploadDatasetAsync1(req: operations.UploadDatasetAsync1RequestBody, security: operations.UploadDatasetAsync1Security, config?: AxiosRequestConfig): Promise<operations.UploadDatasetAsync1Response>;
    /**
     * Create a Dataset From a Zip File Synchronously
     *
     * @remarks
     * Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.
     */
    uploadDatasetSync1(req: operations.UploadDatasetSync1RequestBody, security: operations.UploadDatasetSync1Security, config?: AxiosRequestConfig): Promise<operations.UploadDatasetSync1Response>;
}
