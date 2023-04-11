import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SslCertificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
     */
    computeSslCertificatesAggregatedList(req: operations.ComputeSslCertificatesAggregatedListRequest, security: operations.ComputeSslCertificatesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesAggregatedListResponse>;
    /**
     * Deletes the specified SslCertificate resource.
     */
    computeSslCertificatesDelete(req: operations.ComputeSslCertificatesDeleteRequest, security: operations.ComputeSslCertificatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesDeleteResponse>;
    /**
     * Returns the specified SslCertificate resource.
     */
    computeSslCertificatesGet(req: operations.ComputeSslCertificatesGetRequest, security: operations.ComputeSslCertificatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesGetResponse>;
    /**
     * Creates a SslCertificate resource in the specified project using the data included in the request.
     */
    computeSslCertificatesInsert(req: operations.ComputeSslCertificatesInsertRequest, security: operations.ComputeSslCertificatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesInsertResponse>;
    /**
     * Retrieves the list of SslCertificate resources available to the specified project.
     */
    computeSslCertificatesList(req: operations.ComputeSslCertificatesListRequest, security: operations.ComputeSslCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesListResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeSslCertificatesTestIamPermissions(req: operations.ComputeSslCertificatesTestIamPermissionsRequest, security: operations.ComputeSslCertificatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSslCertificatesTestIamPermissionsResponse>;
}
