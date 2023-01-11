import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://papinet.papinet.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getOrders - List `orders`
     *
     * Gets a paginated list of all `orders`.
    **/
    getOrders(req: operations.GetOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * getOrdersOrderId - Get an `order`
     *
     * Gets the details of a specific `order`, including a paginated list of all its lines.
    **/
    getOrdersOrderId(req: operations.GetOrdersOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersOrderIdResponse>;
}
