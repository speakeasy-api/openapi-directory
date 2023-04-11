import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Replicas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a replica from the pool.
     */
    replicapoolReplicasDelete(req: operations.ReplicapoolReplicasDeleteRequest, security: operations.ReplicapoolReplicasDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasDeleteResponse>;
    /**
     * Gets information about a specific replica.
     */
    replicapoolReplicasGet(req: operations.ReplicapoolReplicasGetRequest, security: operations.ReplicapoolReplicasGetSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasGetResponse>;
    /**
     * Lists all replicas in a pool.
     */
    replicapoolReplicasList(req: operations.ReplicapoolReplicasListRequest, security: operations.ReplicapoolReplicasListSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasListResponse>;
    /**
     * Restarts a replica in a pool.
     */
    replicapoolReplicasRestart(req: operations.ReplicapoolReplicasRestartRequest, security: operations.ReplicapoolReplicasRestartSecurity, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasRestartResponse>;
}
