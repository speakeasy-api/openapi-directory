import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TaggedShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserTagsTagId - Delete a specific tag
    **/
    deleteUserTagsTagId(req: operations.DeleteUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdResponse>;
    /**
     * deleteUserTagsTagIdShowsShowId - Untag a show
    **/
    deleteUserTagsTagIdShowsShowId(req: operations.DeleteUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserTagsTagIdShowsShowIdResponse>;
    /**
     * getUserTags - List all tags
    **/
    getUserTags(config?: AxiosRequestConfig): Promise<operations.GetUserTagsResponse>;
    /**
     * getUserTagsTagIdShows - List all shows under this tag
    **/
    getUserTagsTagIdShows(req: operations.GetUserTagsTagIdShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserTagsTagIdShowsResponse>;
    /**
     * patchUserTagsTagId - Update a specific tag
    **/
    patchUserTagsTagId(req: operations.PatchUserTagsTagIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserTagsTagIdResponse>;
    /**
     * postUserTags - Create a new tag
    **/
    postUserTags(req: operations.PostUserTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostUserTagsResponse>;
    /**
     * putUserTagsTagIdShowsShowId - Tag a show
    **/
    putUserTagsTagIdShowsShowId(req: operations.PutUserTagsTagIdShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserTagsTagIdShowsShowIdResponse>;
}
