import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OperatingSystemVersions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one operating system version by ID.
     */
    dfareportingOperatingSystemVersionsGet(req: operations.DfareportingOperatingSystemVersionsGetRequest, security: operations.DfareportingOperatingSystemVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemVersionsGetResponse>;
    /**
     * Retrieves a list of operating system versions.
     */
    dfareportingOperatingSystemVersionsList(req: operations.DfareportingOperatingSystemVersionsListRequest, security: operations.DfareportingOperatingSystemVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemVersionsListResponse>;
}
