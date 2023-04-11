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
     * Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     */
    datalineageProjectsLocationsBatchSearchLinkProcesses(req: operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest, security: operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datalineageProjectsLocationsOperationsCancel(req: operations.DatalineageProjectsLocationsOperationsCancelRequest, security: operations.DatalineageProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datalineageProjectsLocationsOperationsList(req: operations.DatalineageProjectsLocationsOperationsListRequest, security: operations.DatalineageProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new process.
     */
    datalineageProjectsLocationsProcessesCreate(req: operations.DatalineageProjectsLocationsProcessesCreateRequest, security: operations.DatalineageProjectsLocationsProcessesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesCreateResponse>;
    /**
     * List processes in the given project and location. List order is descending by insertion time.
     */
    datalineageProjectsLocationsProcessesList(req: operations.DatalineageProjectsLocationsProcessesListRequest, security: operations.DatalineageProjectsLocationsProcessesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesListResponse>;
    /**
     * Creates a new run.
     */
    datalineageProjectsLocationsProcessesRunsCreate(req: operations.DatalineageProjectsLocationsProcessesRunsCreateRequest, security: operations.DatalineageProjectsLocationsProcessesRunsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsCreateResponse>;
    /**
     * Creates a new lineage event.
     */
    datalineageProjectsLocationsProcessesRunsLineageEventsCreate(req: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest, security: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateResponse>;
    /**
     * Deletes the lineage event with the specified name.
     */
    datalineageProjectsLocationsProcessesRunsLineageEventsDelete(req: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest, security: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteResponse>;
    /**
     * Gets details of a specified lineage event.
     */
    datalineageProjectsLocationsProcessesRunsLineageEventsGet(req: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest, security: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetResponse>;
    /**
     * Lists lineage events in the given project and location. The list order is not defined.
     */
    datalineageProjectsLocationsProcessesRunsLineageEventsList(req: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest, security: operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListResponse>;
    /**
     * Lists runs in the given project and location. List order is descending by `start_time`.
     */
    datalineageProjectsLocationsProcessesRunsList(req: operations.DatalineageProjectsLocationsProcessesRunsListRequest, security: operations.DatalineageProjectsLocationsProcessesRunsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsListResponse>;
    /**
     * Updates a run.
     */
    datalineageProjectsLocationsProcessesRunsPatch(req: operations.DatalineageProjectsLocationsProcessesRunsPatchRequest, security: operations.DatalineageProjectsLocationsProcessesRunsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsProcessesRunsPatchResponse>;
    /**
     * Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     */
    datalineageProjectsLocationsSearchLinks(req: operations.DatalineageProjectsLocationsSearchLinksRequest, security: operations.DatalineageProjectsLocationsSearchLinksSecurity, config?: AxiosRequestConfig): Promise<operations.DatalineageProjectsLocationsSearchLinksResponse>;
}
