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
     * Creates a new CertificateIssuanceConfig in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest, security: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse>;
    /**
     * Lists CertificateIssuanceConfigs in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateIssuanceConfigsList(req: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListRequest, security: operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListResponse>;
    /**
     * Creates a new CertificateMapEntry in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateRequest, security: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreateResponse>;
    /**
     * Lists CertificateMapEntries in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListRequest, security: operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListResponse>;
    /**
     * Creates a new CertificateMap in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateMapsCreate(req: operations.CertificatemanagerProjectsLocationsCertificateMapsCreateRequest, security: operations.CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsCreateResponse>;
    /**
     * Lists CertificateMaps in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificateMapsList(req: operations.CertificatemanagerProjectsLocationsCertificateMapsListRequest, security: operations.CertificatemanagerProjectsLocationsCertificateMapsListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificateMapsListResponse>;
    /**
     * Creates a new Certificate in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificatesCreate(req: operations.CertificatemanagerProjectsLocationsCertificatesCreateRequest, security: operations.CertificatemanagerProjectsLocationsCertificatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesCreateResponse>;
    /**
     * Lists Certificates in a given project and location.
     */
    certificatemanagerProjectsLocationsCertificatesList(req: operations.CertificatemanagerProjectsLocationsCertificatesListRequest, security: operations.CertificatemanagerProjectsLocationsCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsCertificatesListResponse>;
    /**
     * Creates a new DnsAuthorization in a given project and location.
     */
    certificatemanagerProjectsLocationsDnsAuthorizationsCreate(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateRequest, security: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsCreateResponse>;
    /**
     * Lists DnsAuthorizations in a given project and location.
     */
    certificatemanagerProjectsLocationsDnsAuthorizationsList(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest, security: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse>;
    /**
     * Updates a DnsAuthorization.
     */
    certificatemanagerProjectsLocationsDnsAuthorizationsPatch(req: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchRequest, security: operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsDnsAuthorizationsPatchResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    certificatemanagerProjectsLocationsList(req: operations.CertificatemanagerProjectsLocationsListRequest, security: operations.CertificatemanagerProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    certificatemanagerProjectsLocationsOperationsCancel(req: operations.CertificatemanagerProjectsLocationsOperationsCancelRequest, security: operations.CertificatemanagerProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    certificatemanagerProjectsLocationsOperationsDelete(req: operations.CertificatemanagerProjectsLocationsOperationsDeleteRequest, security: operations.CertificatemanagerProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    certificatemanagerProjectsLocationsOperationsGet(req: operations.CertificatemanagerProjectsLocationsOperationsGetRequest, security: operations.CertificatemanagerProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    certificatemanagerProjectsLocationsOperationsList(req: operations.CertificatemanagerProjectsLocationsOperationsListRequest, security: operations.CertificatemanagerProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CertificatemanagerProjectsLocationsOperationsListResponse>;
}
