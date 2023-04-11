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
     * Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse>;
    /**
     * Lists CertificateRevocationLists.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse>;
    /**
     * Create a new CertificateAuthority in a given Project and Location.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse>;
    /**
     * Disable a CertificateAuthority.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse>;
    /**
     * Enable a CertificateAuthority.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableResponse>;
    /**
     * Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse>;
    /**
     * Lists CertificateAuthorities.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse>;
    /**
     * Undelete a CertificateAuthority that has been deleted.
     */
    privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete(req: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteResponse>;
    /**
     * Create a new Certificate in a given Project, Location from a particular CaPool.
     */
    privatecaProjectsLocationsCaPoolsCertificatesCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse>;
    /**
     * Lists Certificates.
     */
    privatecaProjectsLocationsCaPoolsCertificatesList(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesListRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesListResponse>;
    /**
     * Revoke a Certificate.
     */
    privatecaProjectsLocationsCaPoolsCertificatesRevoke(req: operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse>;
    /**
     * Create a CaPool.
     */
    privatecaProjectsLocationsCaPoolsCreate(req: operations.PrivatecaProjectsLocationsCaPoolsCreateRequest, security: operations.PrivatecaProjectsLocationsCaPoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsCreateResponse>;
    /**
     * FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
     */
    privatecaProjectsLocationsCaPoolsFetchCaCerts(req: operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest, security: operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse>;
    /**
     * Lists CaPools.
     */
    privatecaProjectsLocationsCaPoolsList(req: operations.PrivatecaProjectsLocationsCaPoolsListRequest, security: operations.PrivatecaProjectsLocationsCaPoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCaPoolsListResponse>;
    /**
     * Create a new CertificateTemplate in a given Project and Location.
     */
    privatecaProjectsLocationsCertificateTemplatesCreate(req: operations.PrivatecaProjectsLocationsCertificateTemplatesCreateRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    privatecaProjectsLocationsCertificateTemplatesGetIamPolicy(req: operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse>;
    /**
     * Lists CertificateTemplates.
     */
    privatecaProjectsLocationsCertificateTemplatesList(req: operations.PrivatecaProjectsLocationsCertificateTemplatesListRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesListResponse>;
    /**
     * Update a CertificateTemplate.
     */
    privatecaProjectsLocationsCertificateTemplatesPatch(req: operations.PrivatecaProjectsLocationsCertificateTemplatesPatchRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    privatecaProjectsLocationsCertificateTemplatesSetIamPolicy(req: operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    privatecaProjectsLocationsCertificateTemplatesTestIamPermissions(req: operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest, security: operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    privatecaProjectsLocationsList(req: operations.PrivatecaProjectsLocationsListRequest, security: operations.PrivatecaProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    privatecaProjectsLocationsOperationsCancel(req: operations.PrivatecaProjectsLocationsOperationsCancelRequest, security: operations.PrivatecaProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    privatecaProjectsLocationsOperationsDelete(req: operations.PrivatecaProjectsLocationsOperationsDeleteRequest, security: operations.PrivatecaProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    privatecaProjectsLocationsOperationsGet(req: operations.PrivatecaProjectsLocationsOperationsGetRequest, security: operations.PrivatecaProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    privatecaProjectsLocationsOperationsList(req: operations.PrivatecaProjectsLocationsOperationsListRequest, security: operations.PrivatecaProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivatecaProjectsLocationsOperationsListResponse>;
}
