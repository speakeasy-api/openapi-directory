import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MaintenanceController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a maintenance job for a specific branch
     */
    maintenanceControllerCreateMaintenanceJobForm(req: operations.MaintenanceControllerCreateMaintenanceJobFormRequest, config?: AxiosRequestConfig): Promise<operations.MaintenanceControllerCreateMaintenanceJobFormResponse>;
    /**
     * Create a maintenance job for a specific branch
     */
    maintenanceControllerCreateMaintenanceJobJson(req: operations.MaintenanceControllerCreateMaintenanceJobJsonRequest, config?: AxiosRequestConfig): Promise<operations.MaintenanceControllerCreateMaintenanceJobJsonResponse>;
    /**
     * Create a maintenance job for a specific branch
     */
    maintenanceControllerCreateMaintenanceJobRaw(req: operations.MaintenanceControllerCreateMaintenanceJobRawRequest, config?: AxiosRequestConfig): Promise<operations.MaintenanceControllerCreateMaintenanceJobRawResponse>;
}
