import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Imports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     *
     * @remarks
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     */
    createOrganizationInventoryOnboardingCloudMonitoringImport(req: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse>;
    /**
     * Check the status of a committed Import operation
     *
     * @remarks
     * Check the status of a committed Import operation
     */
    getOrganizationInventoryOnboardingCloudMonitoringImports(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse>;
}
