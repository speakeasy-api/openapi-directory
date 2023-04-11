import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Inventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Claim a list of devices, licenses, and/or orders into an organization inventory
     *
     * @remarks
     * Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.
     */
    claimIntoOrganizationInventory(req: operations.ClaimIntoOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ClaimIntoOrganizationInventoryResponse>;
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
     * Return a single device from the inventory of an organization
     *
     * @remarks
     * Return a single device from the inventory of an organization
     */
    getOrganizationInventoryDevice(req: operations.GetOrganizationInventoryDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDeviceResponse>;
    /**
     * Return the device inventory for an organization
     *
     * @remarks
     * Return the device inventory for an organization
     */
    getOrganizationInventoryDevices(req: operations.GetOrganizationInventoryDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDevicesResponse>;
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
     * Release a list of claimed devices from an organization.
     *
     * @remarks
     * Release a list of claimed devices from an organization.
     */
    releaseFromOrganizationInventory(req: operations.ReleaseFromOrganizationInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseFromOrganizationInventoryResponse>;
}
