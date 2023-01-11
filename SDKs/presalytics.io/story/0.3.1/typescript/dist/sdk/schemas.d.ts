import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storyOutlineSchema - Story Outline Schema
     *
     * Json Schema for validating Story Outline objects
    **/
    storyOutlineSchema(req: operations.StoryOutlineSchemaRequest, config?: AxiosRequestConfig): Promise<operations.StoryOutlineSchemaResponse>;
}
