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
     * Creates a new ContactCenter in a given project and location.
     */
    contactcenteraiplatformProjectsLocationsContactCentersCreate(req: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest, security: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse>;
    /**
     * Lists ContactCenters in a given project and location.
     */
    contactcenteraiplatformProjectsLocationsContactCentersList(req: operations.ContactcenteraiplatformProjectsLocationsContactCentersListRequest, security: operations.ContactcenteraiplatformProjectsLocationsContactCentersListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsContactCentersListResponse>;
    /**
     * Updates the parameters of a single ContactCenter.
     */
    contactcenteraiplatformProjectsLocationsContactCentersPatch(req: operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest, security: operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    contactcenteraiplatformProjectsLocationsList(req: operations.ContactcenteraiplatformProjectsLocationsListRequest, security: operations.ContactcenteraiplatformProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    contactcenteraiplatformProjectsLocationsOperationsCancel(req: operations.ContactcenteraiplatformProjectsLocationsOperationsCancelRequest, security: operations.ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    contactcenteraiplatformProjectsLocationsOperationsDelete(req: operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest, security: operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    contactcenteraiplatformProjectsLocationsOperationsGet(req: operations.ContactcenteraiplatformProjectsLocationsOperationsGetRequest, security: operations.ContactcenteraiplatformProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    contactcenteraiplatformProjectsLocationsOperationsList(req: operations.ContactcenteraiplatformProjectsLocationsOperationsListRequest, security: operations.ContactcenteraiplatformProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsOperationsListResponse>;
    /**
     * Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
     */
    contactcenteraiplatformProjectsLocationsQueryContactCenterQuota(req: operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest, security: operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity, config?: AxiosRequestConfig): Promise<operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaResponse>;
}
