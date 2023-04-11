import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Datafeeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
     */
    contentDatafeedsCustombatch(req: operations.ContentDatafeedsCustombatchRequest, security: operations.ContentDatafeedsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsCustombatchResponse>;
    /**
     * Deletes a datafeed configuration from your Merchant Center account.
     */
    contentDatafeedsDelete(req: operations.ContentDatafeedsDeleteRequest, security: operations.ContentDatafeedsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsDeleteResponse>;
    /**
     * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
     */
    contentDatafeedsFetchnow(req: operations.ContentDatafeedsFetchnowRequest, security: operations.ContentDatafeedsFetchnowSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsFetchnowResponse>;
    /**
     * Retrieves a datafeed configuration from your Merchant Center account.
     */
    contentDatafeedsGet(req: operations.ContentDatafeedsGetRequest, security: operations.ContentDatafeedsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsGetResponse>;
    /**
     * Registers a datafeed configuration with your Merchant Center account.
     */
    contentDatafeedsInsert(req: operations.ContentDatafeedsInsertRequest, security: operations.ContentDatafeedsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsInsertResponse>;
    /**
     * Lists the configurations for datafeeds in your Merchant Center account.
     */
    contentDatafeedsList(req: operations.ContentDatafeedsListRequest, security: operations.ContentDatafeedsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsListResponse>;
    /**
     * Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
     */
    contentDatafeedsUpdate(req: operations.ContentDatafeedsUpdateRequest, security: operations.ContentDatafeedsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedsUpdateResponse>;
}
