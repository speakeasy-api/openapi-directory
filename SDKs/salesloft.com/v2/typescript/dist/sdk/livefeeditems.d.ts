import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Live Feed Items
 */
export declare class LiveFeedItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a live feed item
     *
     * @remarks
     * Creates a live feed item that can be sent to users. May only be used by whitelisted Frontend Integrations. Reference the Salesloft App Directory and Frontend Integrations sections for additional details.
     */
    postV2ThirdPartyLiveFeedItems(req: operations.PostV2ThirdPartyLiveFeedItemsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ThirdPartyLiveFeedItemsResponse>;
}
