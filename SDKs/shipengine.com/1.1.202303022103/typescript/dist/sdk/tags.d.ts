import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * tags
 *
 * @remarks
 *
 */
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a New Tag
     *
     * @remarks
     * Create a new Tag for customizing how you track your shipments
     */
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * Delete Tag
     *
     * @remarks
     * Delete a tag that is no longer needed
     */
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * Get Tags
     *
     * @remarks
     * Get a list of all tags associated with an account.
     */
    listTags(config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * Update Tag Name
     *
     * @remarks
     * Change a tag name while still keeping the relevant shipments attached to it
     */
    renameTag(req: operations.RenameTagRequest, config?: AxiosRequestConfig): Promise<operations.RenameTagResponse>;
}
