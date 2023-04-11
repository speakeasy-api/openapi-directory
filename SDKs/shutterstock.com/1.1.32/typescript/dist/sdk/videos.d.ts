import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * Add videos to collections
     *
     * @remarks
     * This endpoint adds one or more videos to a collection by video IDs.
     */
    addVideoCollectionItems(req: operations.AddVideoCollectionItemsRequest, security: operations.AddVideoCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.AddVideoCollectionItemsResponse>;
    /**
     * Create video collections
     *
     * @remarks
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
     */
    createVideoCollection(req: shared.CollectionCreateRequest, security: operations.CreateVideoCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVideoCollectionResponse>;
    /**
     * Delete video collections
     *
     * @remarks
     * This endpoint deletes a collection.
     */
    deleteVideoCollection(req: operations.DeleteVideoCollectionRequest, security: operations.DeleteVideoCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCollectionResponse>;
    /**
     * Remove videos from collections
     *
     * @remarks
     * This endpoint removes one or more videos from a collection.
     */
    deleteVideoCollectionItems(req: operations.DeleteVideoCollectionItemsRequest, security: operations.DeleteVideoCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCollectionItemsResponse>;
    /**
     * Download videos
     *
     * @remarks
     * This endpoint redownloads videos that you have already received a license for.
     */
    downloadVideos(req: operations.DownloadVideosRequest, security: operations.DownloadVideosSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadVideosResponse>;
    /**
     * List similar videos
     *
     * @remarks
     * This endpoint searches for videos that are similar to a video that you specify.
     */
    findSimilarVideos(req: operations.FindSimilarVideosRequest, security: operations.FindSimilarVideosSecurity, config?: AxiosRequestConfig): Promise<operations.FindSimilarVideosResponse>;
    /**
     * Get the details of featured video collections
     *
     * @remarks
     * This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.
     */
    getFeaturedVideoCollection(req: operations.GetFeaturedVideoCollectionRequest, security: operations.GetFeaturedVideoCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionResponse>;
    /**
     * Get the contents of featured video collections
     *
     * @remarks
     * This endpoint lists the IDs of videos in a featured collection and the date that each was added.
     */
    getFeaturedVideoCollectionItems(req: operations.GetFeaturedVideoCollectionItemsRequest, security: operations.GetFeaturedVideoCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionItemsResponse>;
    /**
     * List featured video collections
     *
     * @remarks
     * This endpoint lists featured video collections and a name and cover video for each collection.
     */
    getFeaturedVideoCollectionList(req: operations.GetFeaturedVideoCollectionListRequest, security: operations.GetFeaturedVideoCollectionListSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionListResponse>;
    /**
     * List updated videos
     *
     * @remarks
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     */
    getUpdatedVideos(req: operations.GetUpdatedVideosRequest, security: operations.GetUpdatedVideosSecurity, config?: AxiosRequestConfig): Promise<operations.GetUpdatedVideosResponse>;
    /**
     * Get details about videos
     *
     * @remarks
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
     */
    getVideo(req: operations.GetVideoRequest, security: operations.GetVideoSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoResponse>;
    /**
     * Get the details of video collections
     *
     * @remarks
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
     */
    getVideoCollection(req: operations.GetVideoCollectionRequest, security: operations.GetVideoCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionResponse>;
    /**
     * Get the contents of video collections
     *
     * @remarks
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
     */
    getVideoCollectionItems(req: operations.GetVideoCollectionItemsRequest, security: operations.GetVideoCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionItemsResponse>;
    /**
     * List video collections
     *
     * @remarks
     * This endpoint lists your collections of videos and their basic attributes.
     */
    getVideoCollectionList(req: operations.GetVideoCollectionListRequest, security: operations.GetVideoCollectionListSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionListResponse>;
    /**
     * List video licenses
     *
     * @remarks
     * This endpoint lists existing licenses.
     */
    getVideoLicenseList(req: operations.GetVideoLicenseListRequest, security: operations.GetVideoLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoLicenseListResponse>;
    /**
     * List videos
     *
     * @remarks
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
     */
    getVideoList(req: operations.GetVideoListRequest, security: operations.GetVideoListSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoListResponse>;
    /**
     * Get suggestions for a search term
     *
     * @remarks
     * This endpoint provides autocomplete suggestions for partial search terms.
     */
    getVideoSuggestions(req: operations.GetVideoSuggestionsRequest, security: operations.GetVideoSuggestionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetVideoSuggestionsResponse>;
    /**
     * License videos
     *
     * @remarks
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     */
    licenseVideos(req: operations.LicenseVideosRequest, security: operations.LicenseVideosSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseVideosResponse>;
    /**
     * List video categories
     *
     * @remarks
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
     */
    listVideoCategories(req: operations.ListVideoCategoriesRequest, security: operations.ListVideoCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ListVideoCategoriesResponse>;
    /**
     * Rename video collections
     *
     * @remarks
     * This endpoint sets a new name for a collection.
     */
    renameVideoCollection(req: operations.RenameVideoCollectionRequest, security: operations.RenameVideoCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.RenameVideoCollectionResponse>;
    /**
     * Search for videos
     *
     * @remarks
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     */
    searchVideos(req: operations.SearchVideosRequest, security: operations.SearchVideosSecurity, config?: AxiosRequestConfig): Promise<operations.SearchVideosResponse>;
}
