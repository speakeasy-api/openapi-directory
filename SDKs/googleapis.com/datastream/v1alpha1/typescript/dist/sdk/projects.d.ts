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
     * Use this method to create a connection profile in a project and location.
     */
    datastreamProjectsLocationsConnectionProfilesCreate(req: operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest, security: operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse>;
    /**
     * Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
     */
    datastreamProjectsLocationsConnectionProfilesDiscover(req: operations.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest, security: operations.DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesDiscoverResponse>;
    /**
     * Use this method to list connection profiles created in a project and location.
     */
    datastreamProjectsLocationsConnectionProfilesList(req: operations.DatastreamProjectsLocationsConnectionProfilesListRequest, security: operations.DatastreamProjectsLocationsConnectionProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesListResponse>;
    /**
     * The FetchStaticIps API call exposes the static IP addresses used by Datastream.
     */
    datastreamProjectsLocationsFetchStaticIps(req: operations.DatastreamProjectsLocationsFetchStaticIpsRequest, security: operations.DatastreamProjectsLocationsFetchStaticIpsSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsFetchStaticIpsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    datastreamProjectsLocationsList(req: operations.DatastreamProjectsLocationsListRequest, security: operations.DatastreamProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datastreamProjectsLocationsOperationsCancel(req: operations.DatastreamProjectsLocationsOperationsCancelRequest, security: operations.DatastreamProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    datastreamProjectsLocationsOperationsList(req: operations.DatastreamProjectsLocationsOperationsListRequest, security: operations.DatastreamProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsOperationsListResponse>;
    /**
     * Use this method to create a private connectivity configuration.
     */
    datastreamProjectsLocationsPrivateConnectionsCreate(req: operations.DatastreamProjectsLocationsPrivateConnectionsCreateRequest, security: operations.DatastreamProjectsLocationsPrivateConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsCreateResponse>;
    /**
     * Use this method to list private connectivity configurations in a project and location.
     */
    datastreamProjectsLocationsPrivateConnectionsList(req: operations.DatastreamProjectsLocationsPrivateConnectionsListRequest, security: operations.DatastreamProjectsLocationsPrivateConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsListResponse>;
    /**
     * Use this method to create a route for a private connectivity in a project and location.
     */
    datastreamProjectsLocationsPrivateConnectionsRoutesCreate(req: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest, security: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse>;
    /**
     * Use this method to list routes created for a private connectivity in a project and location.
     */
    datastreamProjectsLocationsPrivateConnectionsRoutesList(req: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest, security: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse>;
    /**
     * Use this method to create a stream.
     */
    datastreamProjectsLocationsStreamsCreate(req: operations.DatastreamProjectsLocationsStreamsCreateRequest, security: operations.DatastreamProjectsLocationsStreamsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsCreateResponse>;
    /**
     * Use this method to delete a stream.
     */
    datastreamProjectsLocationsStreamsDelete(req: operations.DatastreamProjectsLocationsStreamsDeleteRequest, security: operations.DatastreamProjectsLocationsStreamsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsDeleteResponse>;
    /**
     * Use this method to fetch any errors associated with a stream.
     */
    datastreamProjectsLocationsStreamsFetchErrors(req: operations.DatastreamProjectsLocationsStreamsFetchErrorsRequest, security: operations.DatastreamProjectsLocationsStreamsFetchErrorsSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsFetchErrorsResponse>;
    /**
     * Use this method to list streams in a project and location.
     */
    datastreamProjectsLocationsStreamsList(req: operations.DatastreamProjectsLocationsStreamsListRequest, security: operations.DatastreamProjectsLocationsStreamsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsListResponse>;
    /**
     * Use this method to get details about a stream object.
     */
    datastreamProjectsLocationsStreamsObjectsGet(req: operations.DatastreamProjectsLocationsStreamsObjectsGetRequest, security: operations.DatastreamProjectsLocationsStreamsObjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsGetResponse>;
    /**
     * Use this method to list the objects of a specific stream.
     */
    datastreamProjectsLocationsStreamsObjectsList(req: operations.DatastreamProjectsLocationsStreamsObjectsListRequest, security: operations.DatastreamProjectsLocationsStreamsObjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsListResponse>;
    /**
     * Starts backfill job for the specified stream object.
     */
    datastreamProjectsLocationsStreamsObjectsStartBackfillJob(req: operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest, security: operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse>;
    /**
     * Stops the backfill job for the specified stream object.
     */
    datastreamProjectsLocationsStreamsObjectsStopBackfillJob(req: operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest, security: operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse>;
    /**
     * Use this method to update the configuration of a stream.
     */
    datastreamProjectsLocationsStreamsPatch(req: operations.DatastreamProjectsLocationsStreamsPatchRequest, security: operations.DatastreamProjectsLocationsStreamsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsPatchResponse>;
}
