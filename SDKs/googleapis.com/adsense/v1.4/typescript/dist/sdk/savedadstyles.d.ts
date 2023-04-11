import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Savedadstyles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific saved ad style from the user's account.
     */
    adsenseSavedadstylesGet(req: operations.AdsenseSavedadstylesGetRequest, security: operations.AdsenseSavedadstylesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseSavedadstylesGetResponse>;
    /**
     * List all saved ad styles in the user's account.
     */
    adsenseSavedadstylesList(req: operations.AdsenseSavedadstylesListRequest, security: operations.AdsenseSavedadstylesListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseSavedadstylesListResponse>;
}
