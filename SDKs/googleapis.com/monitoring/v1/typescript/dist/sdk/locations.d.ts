import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
     */
    monitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject(req: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest, security: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse>;
    /**
     * Adds a MonitoredProject with the given project ID to the specified Metrics Scope.
     */
    monitoringLocationsGlobalMetricsScopesProjectsCreate(req: operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest, security: operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse>;
}
