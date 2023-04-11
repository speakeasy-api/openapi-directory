import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a replica pool.
     */
    replicapoolPoolsDelete(req: operations.ReplicapoolPoolsDeleteRequest, security: operations.ReplicapoolPoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsDeleteResponse>;
    /**
     * Gets information about a single replica pool.
     */
    replicapoolPoolsGet(req: operations.ReplicapoolPoolsGetRequest, security: operations.ReplicapoolPoolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsGetResponse>;
    /**
     * Inserts a new replica pool.
     */
    replicapoolPoolsInsert(req: operations.ReplicapoolPoolsInsertRequest, security: operations.ReplicapoolPoolsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsInsertResponse>;
    /**
     * List all replica pools.
     */
    replicapoolPoolsList(req: operations.ReplicapoolPoolsListRequest, security: operations.ReplicapoolPoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsListResponse>;
    /**
     * Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
     */
    replicapoolPoolsResize(req: operations.ReplicapoolPoolsResizeRequest, security: operations.ReplicapoolPoolsResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsResizeResponse>;
    /**
     * Update the template used by the pool.
     */
    replicapoolPoolsUpdatetemplate(req: operations.ReplicapoolPoolsUpdatetemplateRequest, security: operations.ReplicapoolPoolsUpdatetemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolPoolsUpdatetemplateResponse>;
}
