import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Productstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the statuses of multiple products in a single request.
     */
    contentProductstatusesCustombatch(req: operations.ContentProductstatusesCustombatchRequest, security: operations.ContentProductstatusesCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesCustombatchResponse>;
    /**
     * Gets the status of a product from your Merchant Center account.
     */
    contentProductstatusesGet(req: operations.ContentProductstatusesGetRequest, security: operations.ContentProductstatusesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesGetResponse>;
    /**
     * Lists the statuses of the products in your Merchant Center account.
     */
    contentProductstatusesList(req: operations.ContentProductstatusesListRequest, security: operations.ContentProductstatusesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesListResponse>;
    /**
     * Lists the metrics report for a given Repricing product.
     */
    contentProductstatusesRepricingreportsList(req: operations.ContentProductstatusesRepricingreportsListRequest, security: operations.ContentProductstatusesRepricingreportsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesRepricingreportsListResponse>;
}
