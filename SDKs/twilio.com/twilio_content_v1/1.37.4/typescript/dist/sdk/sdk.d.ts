import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://content.twilio.com"];
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
     * deleteContent - Deletes a Content resource
    **/
    deleteContent(req: operations.DeleteContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContentResponse>;
    /**
     * fetchApprovalFetch - Fetch a Content resource's approval status by its unique Content Sid
    **/
    fetchApprovalFetch(req: operations.FetchApprovalFetchRequest, config?: AxiosRequestConfig): Promise<operations.FetchApprovalFetchResponse>;
    /**
     * fetchContent - Fetch a Content resource by its unique Content Sid
    **/
    fetchContent(req: operations.FetchContentRequest, config?: AxiosRequestConfig): Promise<operations.FetchContentResponse>;
    /**
     * listContent - Retrieve a list of Contents belonging to the account used to make the request
    **/
    listContent(req: operations.ListContentRequest, config?: AxiosRequestConfig): Promise<operations.ListContentResponse>;
}
