import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Youtube {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Updates an existing resource.
     */
    youtubeYoutubeV3UpdateCommentThreads(req: operations.YoutubeYoutubeV3UpdateCommentThreadsRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeYoutubeV3UpdateCommentThreadsResponse>;
}
