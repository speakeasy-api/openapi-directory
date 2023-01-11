import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sessionIdDelete - Sessions: Delete by Id
     *
     * Remove a session and dependant data.
    **/
    sessionIdDelete(req: operations.SessionIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdDeleteResponse>;
    /**
     * sessionIdGet - Sessions: Get
     *
     * Get session metadata
    **/
    sessionIdGet(req: operations.SessionIdGetRequest, config?: AxiosRequestConfig): Promise<operations.SessionIdGetResponse>;
    /**
     * storyIdSessionPost - Sessions: Create a Session
     *
     * Create a new session
    **/
    storyIdSessionPost(req: operations.StoryIdSessionPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionPostResponse>;
    /**
     * storyIdSessionsGet - Sessions: List Story Sessions
     *
     * Get a list of sessions asscoaited with this story
    **/
    storyIdSessionsGet(req: operations.StoryIdSessionsGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdSessionsGetResponse>;
}
