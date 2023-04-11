import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PostUserInfos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one post and user info pair, by post_id and user_id.
     */
    bloggerPostUserInfosGet(req: operations.BloggerPostUserInfosGetRequest, security: operations.BloggerPostUserInfosGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostUserInfosGetResponse>;
    /**
     * Lists post and user info pairs.
     */
    bloggerPostUserInfosList(req: operations.BloggerPostUserInfosListRequest, security: operations.BloggerPostUserInfosListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPostUserInfosListResponse>;
}
