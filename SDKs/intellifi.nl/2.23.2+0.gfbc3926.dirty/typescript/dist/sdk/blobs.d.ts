import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
 *
 * @remarks
 * Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.
 *
 * See also the `kvpairs` resource.
 *
 */
export declare class Blobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create binary large object (blob) metadata
     */
    addBlob(req: shared.BlobInput, config?: AxiosRequestConfig): Promise<operations.AddBlobResponse>;
    /**
     * Delete binary large object (blob)
     */
    deleteBlob(req: operations.DeleteBlobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBlobResponse>;
    /**
     * Download a binary large object (blob)
     */
    getBlobById(req: operations.GetBlobByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobByIdResponse>;
    /**
     * Get binary large object (blob)
     */
    getBlobMetadataById(req: operations.GetBlobMetadataByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobMetadataByIdResponse>;
    /**
     * Get all binary large objects (blob)
     */
    getBlobs(req: operations.GetBlobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobsResponse>;
    /**
     * Create binary large object (blob)
     */
    uploadBlobById(req: operations.UploadBlobByIdRequest, config?: AxiosRequestConfig): Promise<operations.UploadBlobByIdResponse>;
}
