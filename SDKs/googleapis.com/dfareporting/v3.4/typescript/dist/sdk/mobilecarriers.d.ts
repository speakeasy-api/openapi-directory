import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MobileCarriers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one mobile carrier by ID.
     */
    dfareportingMobileCarriersGet(req: operations.DfareportingMobileCarriersGetRequest, security: operations.DfareportingMobileCarriersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileCarriersGetResponse>;
    /**
     * Retrieves a list of mobile carriers.
     */
    dfareportingMobileCarriersList(req: operations.DfareportingMobileCarriersListRequest, security: operations.DfareportingMobileCarriersListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingMobileCarriersListResponse>;
}
