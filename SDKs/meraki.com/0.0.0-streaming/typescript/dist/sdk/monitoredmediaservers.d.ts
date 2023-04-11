import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MonitoredMediaServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a media server to be monitored for this organization
     *
     * @remarks
     * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
     */
    createOrganizationInsightMonitoredMediaServer(req: operations.CreateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * Delete a monitored media server from this organization
     *
     * @remarks
     * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
     */
    deleteOrganizationInsightMonitoredMediaServer(req: operations.DeleteOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * Return a monitored media server for this organization
     *
     * @remarks
     * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
     */
    getOrganizationInsightMonitoredMediaServer(req: operations.GetOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServerResponse>;
    /**
     * List the monitored media servers for this organization
     *
     * @remarks
     * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
     */
    getOrganizationInsightMonitoredMediaServers(req: operations.GetOrganizationInsightMonitoredMediaServersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightMonitoredMediaServersResponse>;
    /**
     * Update a monitored media server for this organization
     *
     * @remarks
     * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
     */
    updateOrganizationInsightMonitoredMediaServer(req: operations.UpdateOrganizationInsightMonitoredMediaServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationInsightMonitoredMediaServerResponse>;
}
