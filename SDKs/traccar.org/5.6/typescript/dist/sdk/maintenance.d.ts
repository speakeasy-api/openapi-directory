import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Maintenance management
 */
export declare class Maintenance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Maintenance
     */
    deleteMaintenanceId(req: operations.DeleteMaintenanceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMaintenanceIdResponse>;
    /**
     * Fetch a list of Maintenance
     *
     * @remarks
     * Without params, it returns a list of Maintenance the user has access to
     */
    getMaintenance(req: operations.GetMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.GetMaintenanceResponse>;
    /**
     * Create a Maintenance
     */
    postMaintenance(req: shared.Maintenance, config?: AxiosRequestConfig): Promise<operations.PostMaintenanceResponse>;
    /**
     * Update a Maintenance
     */
    putMaintenanceId(req: operations.PutMaintenanceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutMaintenanceIdResponse>;
}
