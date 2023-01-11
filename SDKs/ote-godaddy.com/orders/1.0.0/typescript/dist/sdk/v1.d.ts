import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * get - Retrieve details for specified order
     *
     * <strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * list - Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time
     *
     * <strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>
    **/
    list(req: operations.ListRequest, config?: AxiosRequestConfig): Promise<operations.ListResponse>;
}
