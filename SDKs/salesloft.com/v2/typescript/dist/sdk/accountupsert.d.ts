import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account Upsert
 */
export declare class AccountUpsert {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upsert an account
     *
     * @remarks
     * Upserts an account record. The upsert_key dictates how the upsert will be performed. The create and update behavior
     * is exactly the same as the individual create and update endpoints.
     *
     */
    postV2AccountUpsertsJson(req: operations.PostV2AccountUpsertsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2AccountUpsertsJsonResponse>;
}
