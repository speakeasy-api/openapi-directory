import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://papinet.papinet.io"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * papinet API is a global initiative for the Forst and Paper supply chain.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * List `orders`
     *
     * @remarks
     * Gets a paginated list of all `orders`.
     */
    getOrders(req: operations.GetOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * Get an `order`
     *
     * @remarks
     * Gets the details of a specific `order`, including a paginated list of all its lines.
     */
    getOrdersOrderId(req: operations.GetOrdersOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersOrderIdResponse>;
}
