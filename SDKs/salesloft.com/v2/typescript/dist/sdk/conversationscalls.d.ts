import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Conversations Calls
 */
export declare class ConversationsCalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Conversations Call
     *
     * @remarks
     * Enqueue a Conversations Call for processing
     */
    postV2ConversationsCalls(req: operations.PostV2ConversationsCallsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ConversationsCallsResponse>;
}
