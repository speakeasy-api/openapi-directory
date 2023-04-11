import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EffectiveTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.
     */
    cloudresourcemanagerEffectiveTagsList(req: operations.CloudresourcemanagerEffectiveTagsListRequest, security: operations.CloudresourcemanagerEffectiveTagsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerEffectiveTagsListResponse>;
}
