import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Onboarding {
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
    /**
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     *
     * @remarks
     * Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
     */
    createOrganizationInventoryOnboardingCloudMonitoringImport(req: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse>;
    /**
     * Fetch onboarding status of cameras
     *
     * @remarks
     * Fetch onboarding status of cameras
     */
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * Check the status of a committed Import operation
     *
     * @remarks
     * Check the status of a committed Import operation
     */
    getOrganizationInventoryOnboardingCloudMonitoringImports(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse>;
    /**
     * Returns list of networks eligible for adding cloud monitored device
     *
     * @remarks
     * Returns list of networks eligible for adding cloud monitored device
     */
    getOrganizationInventoryOnboardingCloudMonitoringNetworks(req: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse>;
    /**
     * Notify that credential handoff to camera has completed
     *
     * @remarks
     * Notify that credential handoff to camera has completed
     */
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
