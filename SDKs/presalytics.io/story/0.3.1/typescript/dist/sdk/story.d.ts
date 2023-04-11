import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Story
 */
export declare class Story {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Story: Get List of User Stories
     *
     * @remarks
     * Returns a list of stories for this user identifie via the access token presentated to the api
     */
    storyGet(req: operations.StoryGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryGetResponse>;
    /**
     * Story: View Analytics
     *
     * @remarks
     * returns an html document containing session and event metrics for the story
     */
    storyIdAnalytics(req: operations.StoryIdAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdAnalyticsResponse>;
    /**
     * Story: Delete by Id
     *
     * @remarks
     * Remove a story and dependant data.
     */
    storyIdDelete(req: operations.StoryIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdDeleteResponse>;
    /**
     * Story: Delete Subdocument
     *
     * @remarks
     * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
     */
    storyIdFileOoxmlautomationidDelete(req: operations.StoryIdFileOoxmlautomationidDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidDeleteResponse>;
    /**
     * Story: Download Updated File
     *
     * @remarks
     * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
     */
    storyIdFileOoxmlautomationidGet(req: operations.StoryIdFileOoxmlautomationidGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidGetResponse>;
    /**
     * Story: Upload a File To Existing Story
     *
     * @remarks
     * Upload a file to an existing story
     */
    storyIdFilePost(req: operations.StoryIdFilePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFilePostResponse>;
    /**
     * Story: Get by Id
     *
     * @remarks
     * Returns story metadata, inlcuding json object with story outline
     */
    storyIdGet(req: operations.StoryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdGetResponse>;
    /**
     * Story: Get Story Outline
     *
     * @remarks
     * Returns Story's outline
     */
    storyIdOutlineGet(req: operations.StoryIdOutlineGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlineGetResponse>;
    /**
     * Story: Post Story Outline
     *
     * @remarks
     * Update a story outline.
     */
    storyIdOutlinePost(req: operations.StoryIdOutlinePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlinePostResponse>;
    /**
     * Story: Public Link to Story Reveal.js Document
     *
     * @remarks
     * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
     */
    storyIdPublic(req: operations.StoryIdPublicRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPublicResponse>;
    /**
     * Story: Modify
     *
     * @remarks
     * Update story metadata, including story outline
     */
    storyIdPut(req: operations.StoryIdPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPutResponse>;
    /**
     * Story: Get Story at Reveal.js Document
     *
     * @remarks
     * returns an html document containing a reveal.js epresentation of the story
     */
    storyIdReveal(req: operations.StoryIdRevealRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdRevealResponse>;
    /**
     * Story: Get Story Status
     *
     * @remarks
     * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
     */
    storyIdStatusGet(req: operations.StoryIdStatusGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdStatusGetResponse>;
    /**
     * Story: Upload
     *
     * @remarks
     * Upload new story to presalytics api
     */
    storyPost(req: operations.StoryPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostResponse>;
    /**
     * Story: Upload a File
     *
     * @remarks
     * Upload new story to presalytics api via an Open Office Xml file
     */
    storyPostFile(req: operations.StoryPostFileRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileResponse>;
    /**
     * Story: Upload a File (base64)
     *
     * @remarks
     * Upload new story to presalytics api via an Open Office Xml file
     */
    storyPostFileJson(req: operations.StoryPostFileJsonRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileJsonResponse>;
}
