import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PostalCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one postal code by ID.
     */
    dfareportingPostalCodesGet(req: operations.DfareportingPostalCodesGetRequest, security: operations.DfareportingPostalCodesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPostalCodesGetResponse>;
    /**
     * Retrieves a list of postal codes.
     */
    dfareportingPostalCodesList(req: operations.DfareportingPostalCodesListRequest, security: operations.DfareportingPostalCodesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPostalCodesListResponse>;
}
