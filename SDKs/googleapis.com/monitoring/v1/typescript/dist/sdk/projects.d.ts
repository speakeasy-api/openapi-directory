import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     */
    monitoringProjectsDashboardsCreate(req: operations.MonitoringProjectsDashboardsCreateRequest, security: operations.MonitoringProjectsDashboardsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsCreateResponse>;
    /**
     * Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     */
    monitoringProjectsDashboardsDelete(req: operations.MonitoringProjectsDashboardsDeleteRequest, security: operations.MonitoringProjectsDashboardsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsDeleteResponse>;
    /**
     * Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     */
    monitoringProjectsDashboardsGet(req: operations.MonitoringProjectsDashboardsGetRequest, security: operations.MonitoringProjectsDashboardsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsGetResponse>;
    /**
     * Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     */
    monitoringProjectsDashboardsList(req: operations.MonitoringProjectsDashboardsListRequest, security: operations.MonitoringProjectsDashboardsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsListResponse>;
    /**
     * Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     */
    monitoringProjectsDashboardsPatch(req: operations.MonitoringProjectsDashboardsPatchRequest, security: operations.MonitoringProjectsDashboardsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsDashboardsPatchResponse>;
    /**
     * Lists possible values for a given label name.
     */
    monitoringProjectsLocationPrometheusApiV1LabelValues(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse>;
    /**
     * Lists labels for metrics.
     */
    monitoringProjectsLocationPrometheusApiV1Labels(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelsRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1LabelsSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelsResponse>;
    /**
     * Lists labels for metrics.
     */
    monitoringProjectsLocationPrometheusApiV1LabelsList(req: operations.MonitoringProjectsLocationPrometheusApiV1LabelsListRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1LabelsListResponse>;
    /**
     * Lists metadata for metrics.
     */
    monitoringProjectsLocationPrometheusApiV1MetadataList(req: operations.MonitoringProjectsLocationPrometheusApiV1MetadataListRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1MetadataListResponse>;
    /**
     * Evaluate a PromQL query at a single point in time.
     */
    monitoringProjectsLocationPrometheusApiV1Query(req: operations.MonitoringProjectsLocationPrometheusApiV1QueryRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1QuerySecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1QueryResponse>;
    /**
     * Lists exemplars relevant to a given PromQL query,
     */
    monitoringProjectsLocationPrometheusApiV1QueryExemplars(req: operations.MonitoringProjectsLocationPrometheusApiV1QueryExemplarsRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1QueryExemplarsResponse>;
    /**
     * Evaluate a PromQL query with start, end time range.
     */
    monitoringProjectsLocationPrometheusApiV1QueryRange(req: operations.MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse>;
    /**
     * Lists metadata for metrics.
     */
    monitoringProjectsLocationPrometheusApiV1Series(req: operations.MonitoringProjectsLocationPrometheusApiV1SeriesRequest, security: operations.MonitoringProjectsLocationPrometheusApiV1SeriesSecurity, config?: AxiosRequestConfig): Promise<operations.MonitoringProjectsLocationPrometheusApiV1SeriesResponse>;
}
