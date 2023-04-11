import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sensor {
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
     * Deletes a sensor alert profile from a network.
     *
     * @remarks
     * Deletes a sensor alert profile from a network.
     */
    deleteNetworkSensorAlertsProfile(req: operations.DeleteNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSensorAlertsProfileResponse>;
    /**
     * List the sensor roles for a given sensor or camera device.
     *
     * @remarks
     * List the sensor roles for a given sensor or camera device.
     */
    getDeviceSensorRelationships(req: operations.GetDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSensorRelationshipsResponse>;
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
     * List the sensor roles for devices in a given network
     *
     * @remarks
     * List the sensor roles for devices in a given network
     */
    getNetworkSensorRelationships(req: operations.GetNetworkSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorRelationshipsResponse>;
    /**
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     *
     * @remarks
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     */
    getOrganizationSensorReadingsHistory(req: operations.GetOrganizationSensorReadingsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsHistoryResponse>;
    /**
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     *
     * @remarks
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     */
    getOrganizationSensorReadingsLatest(req: operations.GetOrganizationSensorReadingsLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsLatestResponse>;
    /**
     * Assign one or more sensor roles to a given sensor or camera device.
     *
     * @remarks
     * Assign one or more sensor roles to a given sensor or camera device.
     */
    updateDeviceSensorRelationships(req: operations.UpdateDeviceSensorRelationshipsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSensorRelationshipsResponse>;
    /**
     * Updates a sensor alert profile for a network.
     *
     * @remarks
     * Updates a sensor alert profile for a network.
     */
    updateNetworkSensorAlertsProfile(req: operations.UpdateNetworkSensorAlertsProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSensorAlertsProfileResponse>;
}
