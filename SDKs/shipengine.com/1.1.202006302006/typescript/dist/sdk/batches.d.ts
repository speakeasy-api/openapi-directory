import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Batches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addToBatch - Add to a Batch
     *
     * Add a Shipment or Rate to a Batch
    **/
    addToBatch(req: operations.AddToBatchRequest, config?: AxiosRequestConfig): Promise<operations.AddToBatchResponse>;
    /**
     * createBatch - Create A Batch
     *
     * Create a Batch
    **/
    createBatch(req: operations.CreateBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchResponse>;
    /**
     * deleteBatch - Delete Batch By Id
     *
     * Delete Batch By Id
    **/
    deleteBatch(req: operations.DeleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchResponse>;
    /**
     * getBatchByExternalId - Get Batch By External ID
     *
     * Get Batch By External ID
    **/
    getBatchByExternalId(req: operations.GetBatchByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchByExternalIdResponse>;
    /**
     * getBatchById - Get Batch By ID
     *
     * Get Batch By ID
    **/
    getBatchById(req: operations.GetBatchByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchByIdResponse>;
    /**
     * listBatchErrors - Get Batch Errors
     *
     * Error handling in batches are handled differently than in a single synchronous request.
     * You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.
     *
    **/
    listBatchErrors(req: operations.ListBatchErrorsRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchErrorsResponse>;
    /**
     * listBatches - List Batches
     *
     * List Batches associated with your Shipengine account
    **/
    listBatches(req: operations.ListBatchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchesResponse>;
    /**
     * processBatch - Process Batch ID Labels
     *
     * Process Batch ID Labels
    **/
    processBatch(req: operations.ProcessBatchRequest, config?: AxiosRequestConfig): Promise<operations.ProcessBatchResponse>;
    /**
     * removeFromBatch - Remove From Batch
     *
     * Remove a shipment or rate from a batch
    **/
    removeFromBatch(req: operations.RemoveFromBatchRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFromBatchResponse>;
    /**
     * updateBatch - Update Batch By Id
     *
     * Update Batch By Id
    **/
    updateBatch(req: operations.UpdateBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBatchResponse>;
}
