import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Profiles {
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
     * List all profiles in a network
     *
     * @remarks
     * List all profiles in a network
     */
    getNetworkSmProfiles(req: operations.GetNetworkSmProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmProfilesResponse>;
    /**
     * List all organization-wide alert configurations
     *
     * @remarks
     * List all organization-wide alert configurations
     */
    getOrganizationAlertsProfiles(req: operations.GetOrganizationAlertsProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAlertsProfilesResponse>;
    /**
     * Return a switch profile port
     *
     * @remarks
     * Return a switch profile port
     */
    getOrganizationConfigTemplateSwitchProfilePort(req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * Return all the ports of a switch profile
     *
     * @remarks
     * Return all the ports of a switch profile
     */
    getOrganizationConfigTemplateSwitchProfilePorts(req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse>;
    /**
     * List the switch profiles for your switch template configuration
     *
     * @remarks
     * List the switch profiles for your switch template configuration
     */
    getOrganizationConfigTemplateSwitchProfiles(req: operations.GetOrganizationConfigTemplateSwitchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilesResponse>;
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
    /**
     * Update a switch profile port
     *
     * @remarks
     * Update a switch profile port
     */
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
