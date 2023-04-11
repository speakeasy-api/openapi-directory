import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Person Upsert
 */
export declare class PersonUpsert {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upsert a person
     *
     * @remarks
     * Upserts a person record. The upsert_key dictates how the upsert will be performed. The create and update behavior
     * is exactly the same as the individual create and update endpoints.
     *
     */
    postV2PersonUpsertsJson(req: operations.PostV2PersonUpsertsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2PersonUpsertsJsonResponse>;
}
