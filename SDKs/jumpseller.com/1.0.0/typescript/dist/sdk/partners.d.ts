import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve statistics.
     */
    getPartnersStoresJson(req: operations.GetPartnersStoresJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPartnersStoresJsonResponse>;
    /**
     * Retrive store creation status.
     */
    getStoreCheckStatusJson(req: operations.GetStoreCheckStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreCheckStatusJsonResponse>;
    /**
     * Create a Partnered Store
     */
    postStoreCreateJson(req: operations.PostStoreCreateJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostStoreCreateJsonResponse>;
}
