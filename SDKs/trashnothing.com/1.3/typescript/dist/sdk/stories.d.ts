import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve and submit stories.
 */
export declare class Stories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List stories
     */
    getStories(req: operations.GetStoriesRequest, security: operations.GetStoriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetStoriesResponse>;
    /**
     * Retrieve a story
     */
    getStory(req: operations.GetStoryRequest, security: operations.GetStorySecurity, config?: AxiosRequestConfig): Promise<operations.GetStoryResponse>;
    /**
     * Like a story
     */
    likeStory(req: operations.LikeStoryRequest, config?: AxiosRequestConfig): Promise<operations.LikeStoryResponse>;
    /**
     * Submit a story
     */
    submitStory(req: operations.SubmitStoryRequestBody, config?: AxiosRequestConfig): Promise<operations.SubmitStoryResponse>;
    /**
     * Unlike a story
     */
    unlikeStory(req: operations.UnlikeStoryRequest, config?: AxiosRequestConfig): Promise<operations.UnlikeStoryResponse>;
    /**
     * Record story viewed
     *
     * @remarks
     * Records every time a user views the full story (and not just a preview or snippet),
     */
    viewedStory(req: operations.ViewedStoryRequest, security: operations.ViewedStorySecurity, config?: AxiosRequestConfig): Promise<operations.ViewedStoryResponse>;
}
