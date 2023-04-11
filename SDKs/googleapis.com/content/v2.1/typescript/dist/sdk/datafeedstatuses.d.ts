import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Datafeedstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets multiple Merchant Center datafeed statuses in a single request.
     */
    contentDatafeedstatusesCustombatch(req: operations.ContentDatafeedstatusesCustombatchRequest, security: operations.ContentDatafeedstatusesCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesCustombatchResponse>;
    /**
     * Retrieves the status of a datafeed from your Merchant Center account.
     */
    contentDatafeedstatusesGet(req: operations.ContentDatafeedstatusesGetRequest, security: operations.ContentDatafeedstatusesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesGetResponse>;
    /**
     * Lists the statuses of the datafeeds in your Merchant Center account.
     */
    contentDatafeedstatusesList(req: operations.ContentDatafeedstatusesListRequest, security: operations.ContentDatafeedstatusesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesListResponse>;
}
