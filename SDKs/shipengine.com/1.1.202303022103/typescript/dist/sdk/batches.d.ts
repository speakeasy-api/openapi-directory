import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * batches
 *
 * @remarks
 *
 */
export declare class Batches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add to a Batch
     *
     * @remarks
     * Add a Shipment or Rate to a Batch
     */
    addToBatch(req: operations.AddToBatchRequest, config?: AxiosRequestConfig): Promise<operations.AddToBatchResponse>;
    /**
     * Create A Batch
     *
     * @remarks
     * Create a Batch
     */
    createBatch(req: shared.CreateBatchRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateBatchResponse>;
    /**
     * Delete Batch By Id
     *
     * @remarks
     * Delete Batch By Id
     */
    deleteBatch(req: operations.DeleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchResponse>;
    /**
     * Get Batch By External ID
     *
     * @remarks
     * Get Batch By External ID
     */
    getBatchByExternalId(req: operations.GetBatchByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchByExternalIdResponse>;
    /**
     * Get Batch By ID
     *
     * @remarks
     * Get Batch By ID
     */
    getBatchById(req: operations.GetBatchByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchByIdResponse>;
    /**
     * Get Batch Errors
     *
     * @remarks
     * Error handling in batches are handled differently than in a single synchronous request.
     * You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.
     *
     */
    listBatchErrors(req: operations.ListBatchErrorsRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchErrorsResponse>;
    /**
     * List Batches
     *
     * @remarks
     * List Batches associated with your Shipengine account
     */
    listBatches(req: operations.ListBatchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchesResponse>;
    /**
     * Process Batch ID Labels
     *
     * @remarks
     * Process Batch ID Labels
     */
    processBatch(req: operations.ProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.ProcessBatchResponse>;
    /**
     * Remove From Batch
     *
     * @remarks
     * Remove a shipment or rate from a batch
     */
    removeFromBatch(req: operations.RemoveFromBatchRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFromBatchResponse>;
    /**
     * Update Batch By Id
     *
     * @remarks
     * Update Batch By Id
     */
    updateBatch(req: operations.UpdateBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBatchResponse>;
}
