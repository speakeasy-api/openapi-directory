import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OperatingSystems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one operating system by DART ID.
     */
    dfareportingOperatingSystemsGet(req: operations.DfareportingOperatingSystemsGetRequest, security: operations.DfareportingOperatingSystemsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemsGetResponse>;
    /**
     * Retrieves a list of operating systems.
     */
    dfareportingOperatingSystemsList(req: operations.DfareportingOperatingSystemsListRequest, security: operations.DfareportingOperatingSystemsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOperatingSystemsListResponse>;
}
