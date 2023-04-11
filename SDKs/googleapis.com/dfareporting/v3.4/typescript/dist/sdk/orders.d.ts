import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one order by ID.
     */
    dfareportingOrdersGet(req: operations.DfareportingOrdersGetRequest, security: operations.DfareportingOrdersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOrdersGetResponse>;
    /**
     * Retrieves a list of orders, possibly filtered. This method supports paging.
     */
    dfareportingOrdersList(req: operations.DfareportingOrdersListRequest, security: operations.DfareportingOrdersListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingOrdersListResponse>;
}
