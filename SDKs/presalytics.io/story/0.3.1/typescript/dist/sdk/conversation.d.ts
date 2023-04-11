import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Conversation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Conversation: List Conversation Messages
     *
     * @remarks
     * Get a list of messages that have been send in this story
     */
    storyIdMessagesGet(req: operations.StoryIdMessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesGetResponse>;
    /**
     * Conversation: Send a Message
     *
     * @remarks
     * Add a message to the Story's conversation
     */
    storyIdMessagesPost(req: operations.StoryIdMessagesPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesPostResponse>;
}
