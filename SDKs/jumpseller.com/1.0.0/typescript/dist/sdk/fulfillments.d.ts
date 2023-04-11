import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Fulfillments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all Fulfillments.
     */
    getFulfillmentsJson(req: operations.GetFulfillmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsJsonResponse>;
    /**
     * Count all Fulfillments.
     */
    getFulfillmentsCountJson(req: operations.GetFulfillmentsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsCountJsonResponse>;
    /**
     * Retrieve a single Fulfillment.
     */
    getFulfillmentsIdJson(req: operations.GetFulfillmentsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsIdJsonResponse>;
    /**
     * Retrieve the Fulfillments associated with the Order.
     */
    getOrderIdFulfillmentsJson(req: operations.GetOrderIdFulfillmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderIdFulfillmentsJsonResponse>;
}
