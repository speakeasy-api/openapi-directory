import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of all operations.
     */
    computeGlobalOperationsAggregatedList(req: operations.ComputeGlobalOperationsAggregatedListRequest, security: operations.ComputeGlobalOperationsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOperationsAggregatedListResponse>;
    /**
     * Deletes the specified Operations resource.
     */
    computeGlobalOperationsDelete(req: operations.ComputeGlobalOperationsDeleteRequest, security: operations.ComputeGlobalOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOperationsDeleteResponse>;
    /**
     * Retrieves the specified Operations resource.
     */
    computeGlobalOperationsGet(req: operations.ComputeGlobalOperationsGetRequest, security: operations.ComputeGlobalOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOperationsGetResponse>;
    /**
     * Retrieves a list of Operation resources contained within the specified project.
     */
    computeGlobalOperationsList(req: operations.ComputeGlobalOperationsListRequest, security: operations.ComputeGlobalOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOperationsListResponse>;
    /**
     * Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
     */
    computeGlobalOperationsWait(req: operations.ComputeGlobalOperationsWaitRequest, security: operations.ComputeGlobalOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOperationsWaitResponse>;
}
