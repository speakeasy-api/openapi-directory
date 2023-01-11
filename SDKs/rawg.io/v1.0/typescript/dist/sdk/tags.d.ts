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
     * tagsList - Get a list of tags.
    **/
    tagsList(req: operations.TagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagsListResponse>;
    /**
     * tagsRead - Get details of the tag.
    **/
    tagsRead(req: operations.TagsReadRequest, config?: AxiosRequestConfig): Promise<operations.TagsReadResponse>;
}
