import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ActionBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an action batch
     *
     * @remarks
     * Create an action batch
     */
    createOrganizationActionBatch(req: operations.CreateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationActionBatchResponse>;
    /**
     * Delete an action batch
     *
     * @remarks
     * Delete an action batch
     */
    deleteOrganizationActionBatch(req: operations.DeleteOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationActionBatchResponse>;
    /**
     * Return an action batch
     *
     * @remarks
     * Return an action batch
     */
    getOrganizationActionBatch(req: operations.GetOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchResponse>;
    /**
     * Return the list of action batches in the organization
     *
     * @remarks
     * Return the list of action batches in the organization
     */
    getOrganizationActionBatches(req: operations.GetOrganizationActionBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchesResponse>;
    /**
     * Update an action batch
     *
     * @remarks
     * Update an action batch
     */
    updateOrganizationActionBatch(req: operations.UpdateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationActionBatchResponse>;
}
