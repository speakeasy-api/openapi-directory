import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SuggestTagsAndRegionsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * suggestTagsAndRegions - Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.
     *
     * This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
     * There is a limit of 64 images in the batch.
    **/
    suggestTagsAndRegions(req: operations.SuggestTagsAndRegionsRequest, config?: AxiosRequestConfig): Promise<operations.SuggestTagsAndRegionsResponse>;
}
