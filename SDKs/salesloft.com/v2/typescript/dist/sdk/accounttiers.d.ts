import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account Tier Information
 */
export declare class AccountTiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Account Tiers
     *
     * @remarks
     * Fetches multiple account tier records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2AccountTiersJson(req: operations.GetV2AccountTiersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountTiersJsonResponse>;
    /**
     * Fetch an account tier
     *
     * @remarks
     * Fetches an account tier, by ID only.
     *
     */
    getV2AccountTiersIdJson(req: operations.GetV2AccountTiersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountTiersIdJsonResponse>;
}
