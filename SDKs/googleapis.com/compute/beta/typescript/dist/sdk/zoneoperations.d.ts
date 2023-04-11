import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ZoneOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified zone-specific Operations resource.
     */
    computeZoneOperationsDelete(req: operations.ComputeZoneOperationsDeleteRequest, security: operations.ComputeZoneOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneOperationsDeleteResponse>;
    /**
     * Retrieves the specified zone-specific Operations resource.
     */
    computeZoneOperationsGet(req: operations.ComputeZoneOperationsGetRequest, security: operations.ComputeZoneOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneOperationsGetResponse>;
    /**
     * Retrieves a list of Operation resources contained within the specified zone.
     */
    computeZoneOperationsList(req: operations.ComputeZoneOperationsListRequest, security: operations.ComputeZoneOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneOperationsListResponse>;
    /**
     * Waits for the specified Operation resource to return as `DONE` or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource. This method waits for no more than the 2 minutes and then returns the current state of the operation, which might be `DONE` or still in progress. This method is called on a best-effort basis. Specifically: - In uncommon cases, when the server is overloaded, the request might return before the default deadline is reached, or might return after zero seconds. - If the default deadline is reached, there is no guarantee that the operation is actually done when the method returns. Be prepared to retry if the operation is not `DONE`.
     */
    computeZoneOperationsWait(req: operations.ComputeZoneOperationsWaitRequest, security: operations.ComputeZoneOperationsWaitSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeZoneOperationsWaitResponse>;
}
