import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Promotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Promotion.
     */
    deletePromotionsIdJson(req: operations.DeletePromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeletePromotionsIdJsonResponse>;
    /**
     * Retrieve all Promotions.
     */
    getPromotionsJson(req: operations.GetPromotionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPromotionsJsonResponse>;
    /**
     * Retrieve a single Promotion.
     */
    getPromotionsIdJson(req: operations.GetPromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPromotionsIdJsonResponse>;
    /**
     * Create a new Promotion.
     */
    postPromotionsJson(req: operations.PostPromotionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPromotionsJsonResponse>;
    /**
     * Update a Promotion.
     */
    putPromotionsIdJson(req: operations.PutPromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPromotionsIdJsonResponse>;
}
