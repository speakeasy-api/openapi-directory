import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTag - Create a New Tag
     *
     * Create a new Tag for customizing how you track your shipments
    **/
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * deleteTag - Delete Tag
     *
     * Delete a tag that is no longer needed
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * listTags - Get Tags
     *
     * Get a list of all tags associated with an account.
    **/
    listTags(config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * renameTag - Update Tag Name
     *
     * Change a tag name while still keeping the relevant shipments attached to it
    **/
    renameTag(req: operations.RenameTagRequest, config?: AxiosRequestConfig): Promise<operations.RenameTagResponse>;
}
