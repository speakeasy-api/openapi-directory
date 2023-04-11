import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionSslCertificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified SslCertificate resource in the region.
     */
    computeRegionSslCertificatesDelete(req: operations.ComputeRegionSslCertificatesDeleteRequest, security: operations.ComputeRegionSslCertificatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslCertificatesDeleteResponse>;
    /**
     * Returns the specified SslCertificate resource in the specified region. Get a list of available SSL certificates by making a list() request.
     */
    computeRegionSslCertificatesGet(req: operations.ComputeRegionSslCertificatesGetRequest, security: operations.ComputeRegionSslCertificatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslCertificatesGetResponse>;
    /**
     * Creates a SslCertificate resource in the specified project and region using the data included in the request
     */
    computeRegionSslCertificatesInsert(req: operations.ComputeRegionSslCertificatesInsertRequest, security: operations.ComputeRegionSslCertificatesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslCertificatesInsertResponse>;
    /**
     * Retrieves the list of SslCertificate resources available to the specified project in the specified region.
     */
    computeRegionSslCertificatesList(req: operations.ComputeRegionSslCertificatesListRequest, security: operations.ComputeRegionSslCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslCertificatesListResponse>;
    /**
     * Returns permissions that a caller has on the specified resource and region.
     */
    computeRegionSslCertificatesTestIamPermissions(req: operations.ComputeRegionSslCertificatesTestIamPermissionsRequest, security: operations.ComputeRegionSslCertificatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionSslCertificatesTestIamPermissionsResponse>;
}
