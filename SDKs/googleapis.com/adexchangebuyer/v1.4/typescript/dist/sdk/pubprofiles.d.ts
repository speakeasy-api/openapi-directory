import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pubprofiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the requested publisher profile(s) by publisher accountId.
     */
    adexchangebuyerPubprofilesList(req: operations.AdexchangebuyerPubprofilesListRequest, security: operations.AdexchangebuyerPubprofilesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPubprofilesListResponse>;
}
