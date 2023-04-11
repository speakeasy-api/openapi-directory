import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalOrganizationOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified Operations resource.
     */
    computeGlobalOrganizationOperationsDelete(req: operations.ComputeGlobalOrganizationOperationsDeleteRequest, security: operations.ComputeGlobalOrganizationOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOrganizationOperationsDeleteResponse>;
    /**
     * Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
     */
    computeGlobalOrganizationOperationsGet(req: operations.ComputeGlobalOrganizationOperationsGetRequest, security: operations.ComputeGlobalOrganizationOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOrganizationOperationsGetResponse>;
    /**
     * Retrieves a list of Operation resources contained within the specified organization.
     */
    computeGlobalOrganizationOperationsList(req: operations.ComputeGlobalOrganizationOperationsListRequest, security: operations.ComputeGlobalOrganizationOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalOrganizationOperationsListResponse>;
}
