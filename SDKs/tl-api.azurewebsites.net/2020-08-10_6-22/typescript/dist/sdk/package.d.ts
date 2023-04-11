import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Package {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete existing package
     *
     */
    packageDelete(req: operations.PackageDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PackageDeleteResponse>;
    /**
     * Get package details by packageId
     *
     */
    packageGet(req: operations.PackageGetRequest, config?: AxiosRequestConfig): Promise<operations.PackageGetResponse>;
    /**
     * Insert new package into the system
     *
     */
    packagePost(req: shared.PackageDTO, config?: AxiosRequestConfig): Promise<operations.PackagePostResponse>;
    /**
     * Update existing package by its ID
     *
     */
    packagePut(req: shared.PackageDTO, config?: AxiosRequestConfig): Promise<operations.PackagePutResponse>;
    /**
     * Search packages
     *
     */
    packageSearch(req: operations.PackageSearchRequest, config?: AxiosRequestConfig): Promise<operations.PackageSearchResponse>;
    /**
     * Status update of existing package
     */
    packageUpdateStatus(req: operations.PackageUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.PackageUpdateStatusResponse>;
}
