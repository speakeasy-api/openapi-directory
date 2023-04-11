import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an instance operation that has been performed on an instance.
     */
    sqlOperationsGet(req: operations.SqlOperationsGetRequest, security: operations.SqlOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SqlOperationsGetResponse>;
    /**
     * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     */
    sqlOperationsList(req: operations.SqlOperationsListRequest, security: operations.SqlOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.SqlOperationsListResponse>;
}
