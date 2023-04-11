import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PlatformTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one platform type by ID.
     */
    dfareportingPlatformTypesGet(req: operations.DfareportingPlatformTypesGetRequest, security: operations.DfareportingPlatformTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlatformTypesGetResponse>;
    /**
     * Retrieves a list of platform types.
     */
    dfareportingPlatformTypesList(req: operations.DfareportingPlatformTypesListRequest, security: operations.DfareportingPlatformTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlatformTypesListResponse>;
}
