import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Buckets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes an empty bucket.
     */
    storageBucketsDelete(req: operations.StorageBucketsDeleteRequest, security: operations.StorageBucketsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsDeleteResponse>;
    /**
     * Returns metadata for the specified bucket.
     */
    storageBucketsGet(req: operations.StorageBucketsGetRequest, security: operations.StorageBucketsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsGetResponse>;
    /**
     * Creates a new bucket.
     */
    storageBucketsInsert(req: operations.StorageBucketsInsertRequest, security: operations.StorageBucketsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsInsertResponse>;
    /**
     * Retrieves a list of buckets for a given project.
     */
    storageBucketsList(req: operations.StorageBucketsListRequest, security: operations.StorageBucketsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsListResponse>;
    /**
     * Updates a bucket. This method supports patch semantics.
     */
    storageBucketsPatch(req: operations.StorageBucketsPatchRequest, security: operations.StorageBucketsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsPatchResponse>;
    /**
     * Updates a bucket.
     */
    storageBucketsUpdate(req: operations.StorageBucketsUpdateRequest, security: operations.StorageBucketsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsUpdateResponse>;
}
