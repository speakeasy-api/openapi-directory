import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Overview {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns an overview of aggregate analytics data for a timespan
     *
     * @remarks
     * Returns an overview of aggregate analytics data for a timespan
     */
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * Return overview statistics for network clients
     *
     * @remarks
     * Return overview statistics for network clients
     */
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * Return an overview of currently alerting sensors by metric
     *
     * @remarks
     * Return an overview of currently alerting sensors by metric
     */
    getNetworkSensorAlertsCurrentOverviewByMetric(req: operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse>;
    /**
     * Return an overview of alert occurrences over a timespan, by metric
     *
     * @remarks
     * Return an overview of alert occurrences over a timespan, by metric
     */
    getNetworkSensorAlertsOverviewByMetric(req: operations.GetNetworkSensorAlertsOverviewByMetricRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsOverviewByMetricResponse>;
    /**
     * Returns adaptive policy aggregate statistics for an organization
     *
     * @remarks
     * Returns adaptive policy aggregate statistics for an organization
     */
    getOrganizationAdaptivePolicyOverview(req: operations.GetOrganizationAdaptivePolicyOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyOverviewResponse>;
    /**
     * Return an aggregated overview of API requests data
     *
     * @remarks
     * Return an aggregated overview of API requests data
     */
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
    /**
     * Tracks organizations' API requests by response code across a given time period
     *
     * @remarks
     * Tracks organizations' API requests by response code across a given time period
     */
    getOrganizationApiRequestsOverviewResponseCodesByInterval(req: operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse>;
    /**
     * Return summary information around client data usage (in mb) across the given organization.
     *
     * @remarks
     * Return summary information around client data usage (in mb) across the given organization.
     */
    getOrganizationClientsOverview(req: operations.GetOrganizationClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsOverviewResponse>;
    /**
     * Return an overview of current device statuses
     *
     * @remarks
     * Return an overview of current device statuses
     */
    getOrganizationDevicesStatusesOverview(req: operations.GetOrganizationDevicesStatusesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesOverviewResponse>;
    /**
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
}
