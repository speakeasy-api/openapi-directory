import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TaggedShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a specific tag
     */
    deleteUserTagsTagId(req: operations.DeleteUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdResponse>;
    /**
     * Untag a show
     */
    deleteUserTagsTagIdShowsShowId(req: operations.DeleteUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdShowsShowIdResponse>;
    /**
     * List all tags
     */
    getUserTags(config?: AxiosRequestConfig): Promise<operations.GetUserTagsResponse>;
    /**
     * List all shows under this tag
     */
    getUserTagsTagIdShows(req: operations.GetUserTagsTagIdShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTagsTagIdShowsResponse>;
    /**
     * Update a specific tag
     */
    patchUserTagsTagId(req: operations.PatchUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserTagsTagIdResponse>;
    /**
     * Create a new tag
     */
    postUserTags(req: shared.TagInput, config?: AxiosRequestConfig): Promise<operations.PostUserTagsResponse>;
    /**
     * Tag a show
     */
    putUserTagsTagIdShowsShowId(req: operations.PutUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagsTagIdShowsShowIdResponse>;
}
