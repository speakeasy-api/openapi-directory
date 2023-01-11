import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyIdEventsGet - Events: List Events
     *
     * Get a list of Events available to users of this story
    **/
    storyIdEventsGet(req: operations.StoryIdEventsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsGetResponse>;
    /**
     * storyIdEventsPost - Events: Manage Events
     *
     * Add a message to the Story's conversation
    **/
    storyIdEventsPost(req: operations.StoryIdEventsPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdEventsPostResponse>;
}
