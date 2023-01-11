import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Conversation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyIdMessagesGet - Conversation: List Conversation Messages
     *
     * Get a list of messages that have been send in this story
    **/
    storyIdMessagesGet(req: operations.StoryIdMessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesGetResponse>;
    /**
     * storyIdMessagesPost - Conversation: Send a Message
     *
     * Add a message to the Story's conversation
    **/
    storyIdMessagesPost(req: operations.StoryIdMessagesPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdMessagesPostResponse>;
}
