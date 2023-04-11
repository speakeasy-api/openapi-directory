import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Top {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the top 10 appliances sorted by utilization over given time range.
     *
     * @remarks
     * Return the top 10 appliances sorted by utilization over given time range.
     */
    getOrganizationSummaryTopAppliancesByUtilization(req: operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse>;
    /**
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     *
     * @remarks
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     */
    getOrganizationSummaryTopClientsByUsage(req: operations.GetOrganizationSummaryTopClientsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsByUsageResponse>;
    /**
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     *
     * @remarks
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     */
    getOrganizationSummaryTopClientsManufacturersByUsage(req: operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse>;
    /**
     * Return metrics for organization's top 10 devices sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesByUsage(req: operations.GetOrganizationSummaryTopDevicesByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesByUsageResponse>;
    /**
     * Return metrics for organization's top 10 device models sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesModelsByUsage(req: operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 ssids by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopSsidsByUsage(req: operations.GetOrganizationSummaryTopSsidsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSsidsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 switches by energy usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.
     */
    getOrganizationSummaryTopSwitchesByEnergyUsage(req: operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse>;
}
