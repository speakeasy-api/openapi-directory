import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * orders - Orders
     *
     * Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners
    **/
    orders(req: operations.OrdersRequest, config?: AxiosRequestConfig): Promise<operations.OrdersResponse>;
}
