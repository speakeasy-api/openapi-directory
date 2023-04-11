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
     * Returns true if valid credentials exist for the given data source and requesting user.
     */
    bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest, security: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse>;
    /**
     * Lists supported data sources and returns their settings.
     */
    bigquerydatatransferProjectsLocationsDataSourcesList(req: operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest, security: operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse>;
    /**
     * Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
     */
    bigquerydatatransferProjectsLocationsEnrollDataSources(req: operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest, security: operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    bigquerydatatransferProjectsLocationsList(req: operations.BigquerydatatransferProjectsLocationsListRequest, security: operations.BigquerydatatransferProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsListResponse>;
    /**
     * Creates a new data transfer configuration.
     */
    bigquerydatatransferProjectsTransferConfigsCreate(req: operations.BigquerydatatransferProjectsTransferConfigsCreateRequest, security: operations.BigquerydatatransferProjectsTransferConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsCreateResponse>;
    /**
     * Returns information about all transfer configs owned by a project in the specified location.
     */
    bigquerydatatransferProjectsTransferConfigsList(req: operations.BigquerydatatransferProjectsTransferConfigsListRequest, security: operations.BigquerydatatransferProjectsTransferConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsListResponse>;
    /**
     * Updates a data transfer configuration. All fields must be set, even if they are not updated.
     */
    bigquerydatatransferProjectsTransferConfigsPatch(req: operations.BigquerydatatransferProjectsTransferConfigsPatchRequest, security: operations.BigquerydatatransferProjectsTransferConfigsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsPatchResponse>;
    /**
     * Deletes the specified transfer run.
     */
    bigquerydatatransferProjectsTransferConfigsRunsDelete(req: operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest, security: operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse>;
    /**
     * Returns information about the particular transfer run.
     */
    bigquerydatatransferProjectsTransferConfigsRunsGet(req: operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest, security: operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse>;
    /**
     * Returns information about running and completed transfer runs.
     */
    bigquerydatatransferProjectsTransferConfigsRunsList(req: operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest, security: operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse>;
    /**
     * Returns log messages for the transfer run.
     */
    bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList(req: operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest, security: operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse>;
    /**
     * Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     */
    bigquerydatatransferProjectsTransferConfigsScheduleRuns(req: operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest, security: operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse>;
    /**
     * Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
     */
    bigquerydatatransferProjectsTransferConfigsStartManualRuns(req: operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest, security: operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse>;
}
