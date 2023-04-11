import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TagsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a tag for the project
     */
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * Delete a tag from the project
     */
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * Get information about a specific tag
     */
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * Get the tags for a given project and iteration
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Update a tag
     */
    updateTagForm(req: operations.UpdateTagFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagFormResponse>;
    /**
     * Update a tag
     */
    updateTagJson(req: operations.UpdateTagJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagJsonResponse>;
    /**
     * Update a tag
     */
    updateTagRaw(req: operations.UpdateTagRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagRawResponse>;
}
