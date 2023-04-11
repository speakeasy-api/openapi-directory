import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Story Outline Schema
     *
     * @remarks
     * Json Schema for validating Story Outline objects
     */
    storyOutlineSchema(req: operations.StoryOutlineSchemaRequest, config?: AxiosRequestConfig): Promise<operations.StoryOutlineSchemaResponse>;
}
