import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified region-specific Operations resource.
     */
    computeRegionOperationsDelete(req: operations.ComputeRegionOperationsDeleteRequest, security: operations.ComputeRegionOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionOperationsDeleteResponse>;
    /**
     * Retrieves the specified region-specific Operations resource.
     */
    computeRegionOperationsGet(req: operations.ComputeRegionOperationsGetRequest, security: operations.ComputeRegionOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionOperationsGetResponse>;
    /**
     * Retrieves a list of Operation resources contained within the specified region.
     */
    computeRegionOperationsList(req: operations.ComputeRegionOperationsListRequest, security: operations.ComputeRegionOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionOperationsListResponse>;
    /**
     * Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method differs from the `GET` method in that it waits for no more than the default deadline (2 minutes) and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
     */
    computeRegionOperationsWait(req: operations.ComputeRegionOperationsWaitRequest, security: operations.ComputeRegionOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionOperationsWaitResponse>;
}
