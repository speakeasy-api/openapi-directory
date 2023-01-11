import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Story {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyGet - Story: Get List of User Stories
     *
     * Returns a list of stories for this user identifie via the access token presentated to the api
    **/
    storyGet(req: operations.StoryGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryGetResponse>;
    /**
     * storyIdAnalytics - Story: View Analytics
     *
     * returns an html document containing session and event metrics for the story
    **/
    storyIdAnalytics(req: operations.StoryIdAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdAnalyticsResponse>;
    /**
     * storyIdDelete - Story: Delete by Id
     *
     * Remove a story and dependant data.
    **/
    storyIdDelete(req: operations.StoryIdDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdDeleteResponse>;
    /**
     * storyIdFileOoxmlautomationidDelete - Story: Delete Subdocument
     *
     * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
    **/
    storyIdFileOoxmlautomationidDelete(req: operations.StoryIdFileOoxmlautomationidDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidDeleteResponse>;
    /**
     * storyIdFileOoxmlautomationidGet - Story: Download Updated File
     *
     * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
    **/
    storyIdFileOoxmlautomationidGet(req: operations.StoryIdFileOoxmlautomationidGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFileOoxmlautomationidGetResponse>;
    /**
     * storyIdFilePost - Story: Upload a File To Existing Story
     *
     * Upload a file to an existing story
    **/
    storyIdFilePost(req: operations.StoryIdFilePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdFilePostResponse>;
    /**
     * storyIdGet - Story: Get by Id
     *
     * Returns story metadata, inlcuding json object with story outline
    **/
    storyIdGet(req: operations.StoryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdGetResponse>;
    /**
     * storyIdOutlineGet - Story: Get Story Outline
     *
     * Returns Story's outline
    **/
    storyIdOutlineGet(req: operations.StoryIdOutlineGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlineGetResponse>;
    /**
     * storyIdOutlinePost - Story: Post Story Outline
     *
     * Update a story outline.
    **/
    storyIdOutlinePost(req: operations.StoryIdOutlinePostRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdOutlinePostResponse>;
    /**
     * storyIdPublic - Story: Public Link to Story Reveal.js Document
     *
     * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
    **/
    storyIdPublic(req: operations.StoryIdPublicRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPublicResponse>;
    /**
     * storyIdPut - Story: Modify
     *
     * Update story metadata, including story outline
    **/
    storyIdPut(req: operations.StoryIdPutRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdPutResponse>;
    /**
     * storyIdReveal - Story: Get Story at Reveal.js Document
     *
     * returns an html document containing a reveal.js epresentation of the story
    **/
    storyIdReveal(req: operations.StoryIdRevealRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdRevealResponse>;
    /**
     * storyIdStatusGet - Story: Get Story Status
     *
     * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
    **/
    storyIdStatusGet(req: operations.StoryIdStatusGetRequest, config?: AxiosRequestConfig): Promise<operations.StoryIdStatusGetResponse>;
    /**
     * storyPost - Story: Upload
     *
     * Upload new story to presalytics api
    **/
    storyPost(req: operations.StoryPostRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostResponse>;
    /**
     * storyPostFile - Story: Upload a File
     *
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    storyPostFile(req: operations.StoryPostFileRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileResponse>;
    /**
     * storyPostFileJson - Story: Upload a File (base64)
     *
     * Upload new story to presalytics api via an Open Office Xml file
    **/
    storyPostFileJson(req: operations.StoryPostFileJsonRequest, config?: AxiosRequestConfig): Promise<operations.StoryPostFileJsonResponse>;
}
