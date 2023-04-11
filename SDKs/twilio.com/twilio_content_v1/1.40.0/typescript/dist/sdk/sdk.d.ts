import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://content.twilio.com"];
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
 * This is the public Twilio REST API.
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
     * Deletes a Content resource
     */
    deleteContent(req: operations.DeleteContentRequest, security: operations.DeleteContentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteContentResponse>;
    /**
     * Fetch a Content resource's approval status by its unique Content Sid
     */
    fetchApprovalFetch(req: operations.FetchApprovalFetchRequest, security: operations.FetchApprovalFetchSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchApprovalFetchResponse>;
    /**
     * Fetch a Content resource by its unique Content Sid
     */
    fetchContent(req: operations.FetchContentRequest, security: operations.FetchContentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchContentResponse>;
    /**
     * Retrieve a list of Contents belonging to the account used to make the request
     */
    listContent(req: operations.ListContentRequest, security: operations.ListContentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListContentResponse>;
    /**
     * Retrieve a list of Contents with approval statuses belonging to the account used to make the request
     */
    listContentAndApprovals(req: operations.ListContentAndApprovalsRequest, security: operations.ListContentAndApprovalsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListContentAndApprovalsResponse>;
    /**
     * Retrieve a list of Legacy Contents belonging to the account used to make the request
     */
    listLegacyContent(req: operations.ListLegacyContentRequest, security: operations.ListLegacyContentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListLegacyContentResponse>;
}
