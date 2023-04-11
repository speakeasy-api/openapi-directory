import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a sensor alert profile for a network.
     *
     * @remarks
     * Creates a sensor alert profile for a network.
     */
    createNetworkSensorAlertsProfile(req: operations.CreateNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSensorAlertsProfileResponse>;
    /**
     * Create an organization-wide alert configuration
     *
     * @remarks
     * Create an organization-wide alert configuration
     */
    createOrganizationAlertsProfile(req: operations.CreateOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAlertsProfileResponse>;
    /**
     * Deletes a sensor alert profile from a network.
     *
     * @remarks
     * Deletes a sensor alert profile from a network.
     */
    deleteNetworkSensorAlertsProfile(req: operations.DeleteNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSensorAlertsProfileResponse>;
    /**
     * Removes an organization-wide alert config
     *
     * @remarks
     * Removes an organization-wide alert config
     */
    deleteOrganizationAlertsProfile(req: operations.DeleteOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAlertsProfileResponse>;
    /**
     * Return the alert history for this network
     *
     * @remarks
     * Return the alert history for this network
     */
    getNetworkAlertsHistory(req: operations.GetNetworkAlertsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsHistoryResponse>;
    /**
     * Return the alert configuration for this network
     *
     * @remarks
     * Return the alert configuration for this network
     */
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * Return all global alerts on this network
     *
     * @remarks
     * Return all global alerts on this network
     */
    getNetworkHealthAlerts(req: operations.GetNetworkHealthAlertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkHealthAlertsResponse>;
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
     * Show details of a sensor alert profile for a network.
     *
     * @remarks
     * Show details of a sensor alert profile for a network.
     */
    getNetworkSensorAlertsProfile(req: operations.GetNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsProfileResponse>;
    /**
     * Lists all sensor alert profiles for a network.
     *
     * @remarks
     * Lists all sensor alert profiles for a network.
     */
    getNetworkSensorAlertsProfiles(req: operations.GetNetworkSensorAlertsProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsProfilesResponse>;
    /**
     * List all organization-wide alert configurations
     *
     * @remarks
     * List all organization-wide alert configurations
     */
    getOrganizationAlertsProfiles(req: operations.GetOrganizationAlertsProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAlertsProfilesResponse>;
    /**
     * Update the alert configuration for this network
     *
     * @remarks
     * Update the alert configuration for this network
     */
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
    /**
     * Updates a sensor alert profile for a network.
     *
     * @remarks
     * Updates a sensor alert profile for a network.
     */
    updateNetworkSensorAlertsProfile(req: operations.UpdateNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSensorAlertsProfileResponse>;
    /**
     * Update an organization-wide alert config
     *
     * @remarks
     * Update an organization-wide alert config
     */
    updateOrganizationAlertsProfile(req: operations.UpdateOrganizationAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAlertsProfileResponse>;
}
