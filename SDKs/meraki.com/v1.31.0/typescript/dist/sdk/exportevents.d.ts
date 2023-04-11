import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ExportEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Imports event logs related to the onboarding app into elastisearch
     *
     * @remarks
     * Imports event logs related to the onboarding app into elastisearch
     */
    createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse>;
}
