import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of tags.
     */
    tagsList(req: operations.TagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagsListResponse>;
    /**
     * Get details of the tag.
     */
    tagsRead(req: operations.TagsReadRequest, config?: AxiosRequestConfig): Promise<operations.TagsReadResponse>;
}
