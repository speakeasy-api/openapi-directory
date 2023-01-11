import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Addons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addonsList - List all addons
     *
     *
     * A paginated list of addons configurable with the OSF
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     *
     * The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.
     *
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     *
     * This request should never return an error.
    **/
    addonsList(config?: AxiosRequestConfig): Promise<operations.AddonsListResponse>;
}
