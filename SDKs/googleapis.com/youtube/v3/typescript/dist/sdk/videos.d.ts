import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Videos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubeVideosDelete(req: operations.YoutubeVideosDeleteRequest, security: operations.YoutubeVideosDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosDeleteResponse>;
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos.
     */
    youtubeVideosGetRating(req: operations.YoutubeVideosGetRatingRequest, security: operations.YoutubeVideosGetRatingSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosGetRatingResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeVideosInsert(req: operations.YoutubeVideosInsertRequest, security: operations.YoutubeVideosInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeVideosList(req: operations.YoutubeVideosListRequest, security: operations.YoutubeVideosListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosListResponse>;
    /**
     * Adds a like or dislike rating to a video or removes a rating from a video.
     */
    youtubeVideosRate(req: operations.YoutubeVideosRateRequest, security: operations.YoutubeVideosRateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosRateResponse>;
    /**
     * Report abuse for a video.
     */
    youtubeVideosReportAbuse(req: operations.YoutubeVideosReportAbuseRequest, security: operations.YoutubeVideosReportAbuseSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosReportAbuseResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeVideosUpdate(req: operations.YoutubeVideosUpdateRequest, security: operations.YoutubeVideosUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeVideosUpdateResponse>;
}
