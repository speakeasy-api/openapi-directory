import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Videos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoCollectionItems - Add videos to collections
     *
     * This endpoint adds one or more videos to a collection by video IDs.
    **/
    addVideoCollectionItems(req: operations.AddVideoCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoCollectionItemsResponse>;
    /**
     * createVideoCollection - Create video collections
     *
     * This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.
    **/
    createVideoCollection(req: operations.CreateVideoCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVideoCollectionResponse>;
    /**
     * deleteVideoCollection - Delete video collections
     *
     * This endpoint deletes a collection.
    **/
    deleteVideoCollection(req: operations.DeleteVideoCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCollectionResponse>;
    /**
     * deleteVideoCollectionItems - Remove videos from collections
     *
     * This endpoint removes one or more videos from a collection.
    **/
    deleteVideoCollectionItems(req: operations.DeleteVideoCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoCollectionItemsResponse>;
    /**
     * downloadVideos - Download videos
     *
     * This endpoint redownloads videos that you have already received a license for.
    **/
    downloadVideos(req: operations.DownloadVideosRequest, config?: AxiosRequestConfig): Promise<operations.DownloadVideosResponse>;
    /**
     * getFeaturedVideoCollection - Get the details of featured video collections
     *
     * This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.
    **/
    getFeaturedVideoCollection(req: operations.GetFeaturedVideoCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionResponse>;
    /**
     * getFeaturedVideoCollectionItems - Get the contents of featured video collections
     *
     * This endpoint lists the IDs of videos in a featured collection and the date that each was added.
    **/
    getFeaturedVideoCollectionItems(req: operations.GetFeaturedVideoCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionItemsResponse>;
    /**
     * getFeaturedVideoCollectionList - List featured video collections
     *
     * This endpoint lists featured video collections and a name and cover video for each collection.
    **/
    getFeaturedVideoCollectionList(req: operations.GetFeaturedVideoCollectionListRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedVideoCollectionListResponse>;
    /**
     * getSimilarVideos - List similar videos
     *
     * This endpoint searches for videos that are similar to a video that you specify.
    **/
    getSimilarVideos(req: operations.GetSimilarVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarVideosResponse>;
    /**
     * getUpdatedVideos - List updated videos
     *
     * This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
    **/
    getUpdatedVideos(req: operations.GetUpdatedVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatedVideosResponse>;
    /**
     * getVideo - Get details about videos
     *
     * This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.
    **/
    getVideo(req: operations.GetVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoResponse>;
    /**
     * getVideoCollection - Get the details of video collections
     *
     * This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.
    **/
    getVideoCollection(req: operations.GetVideoCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionResponse>;
    /**
     * getVideoCollectionItems - Get the contents of video collections
     *
     * This endpoint lists the IDs of videos in a collection and the date that each was added.
    **/
    getVideoCollectionItems(req: operations.GetVideoCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionItemsResponse>;
    /**
     * getVideoCollectionList - List video collections
     *
     * This endpoint lists your collections of videos and their basic attributes.
    **/
    getVideoCollectionList(req: operations.GetVideoCollectionListRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCollectionListResponse>;
    /**
     * getVideoLicenseList - List video licenses
     *
     * This endpoint lists existing licenses.
    **/
    getVideoLicenseList(req: operations.GetVideoLicenseListRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoLicenseListResponse>;
    /**
     * getVideoList - List videos
     *
     * This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.
    **/
    getVideoList(req: operations.GetVideoListRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoListResponse>;
    /**
     * getVideoSuggestions - Get suggestions for a search term
     *
     * This endpoint provides autocomplete suggestions for partial search terms.
    **/
    getVideoSuggestions(req: operations.GetVideoSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoSuggestionsResponse>;
    /**
     * licenseVideos - License videos
     *
     * This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters.
    **/
    licenseVideos(req: operations.LicenseVideosRequest, config?: AxiosRequestConfig): Promise<operations.LicenseVideosResponse>;
    /**
     * listVideoCategories - List video categories
     *
     * This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.
    **/
    listVideoCategories(req: operations.ListVideoCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListVideoCategoriesResponse>;
    /**
     * renameVideoCollection - Rename video collections
     *
     * This endpoint sets a new name for a collection.
    **/
    renameVideoCollection(req: operations.RenameVideoCollectionRequest, config?: AxiosRequestConfig): Promise<operations.RenameVideoCollectionResponse>;
    /**
     * searchVideos - Search for videos
     *
     * This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
    **/
    searchVideos(req: operations.SearchVideosRequest, config?: AxiosRequestConfig): Promise<operations.SearchVideosResponse>;
}
