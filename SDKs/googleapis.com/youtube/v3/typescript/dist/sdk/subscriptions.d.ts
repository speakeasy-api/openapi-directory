import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubeSubscriptionsDelete(req: operations.YoutubeSubscriptionsDeleteRequest, security: operations.YoutubeSubscriptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeSubscriptionsInsert(req: operations.YoutubeSubscriptionsInsertRequest, security: operations.YoutubeSubscriptionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeSubscriptionsList(req: operations.YoutubeSubscriptionsListRequest, security: operations.YoutubeSubscriptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeSubscriptionsListResponse>;
}
