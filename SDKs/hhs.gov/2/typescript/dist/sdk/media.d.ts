import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about media
 */
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get MediaItems
     *
     * @remarks
     * Media Items Listings
     */
    getResourcesMediaJson(req: operations.GetResourcesMediaJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaJsonResponse>;
    /**
     * Get the list of featured content in the syndication system
     *
     * @remarks
     * Get the list of featured content in the syndication system
     */
    getResourcesMediaFeaturedJson(req: operations.GetResourcesMediaFeaturedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaFeaturedJsonResponse>;
    /**
     * Get MediaItems by popularity
     *
     * @remarks
     * Get the media with the highest ratings.
     */
    getResourcesMediaMostPopularMediaFormat(req: operations.GetResourcesMediaMostPopularMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaMostPopularMediaFormatResponse>;
    /**
     * Get MediaItems by search query
     *
     * @remarks
     * Full search
     */
    getResourcesMediaSearchResultsJson(req: operations.GetResourcesMediaSearchResultsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaSearchResultsJsonResponse>;
    /**
     * Get MediaItem by ID
     *
     * @remarks
     * Information about a specific media item
     */
    getResourcesMediaIdJson(req: operations.GetResourcesMediaIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdJsonResponse>;
    /**
     * Get content for MediaItem
     *
     * @remarks
     * The actual media content (html, image, etc...)
     */
    getResourcesMediaIdContent(req: operations.GetResourcesMediaIdContentRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdContentResponse>;
    /**
     * Get embed code for MediaItem
     *
     * @remarks
     * Get the javascript or iframe embed code for this item (to embed it on a web page).
     */
    getResourcesMediaIdEmbedJson(req: operations.GetResourcesMediaIdEmbedJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdEmbedJsonResponse>;
    /**
     * Get Tag by ID
     *
     * @remarks
     * Get the jpg preview of the content item where applicable.
     */
    getResourcesMediaIdPreviewJpg(req: operations.GetResourcesMediaIdPreviewJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdPreviewJpgResponse>;
    /**
     * Get related MediaItems by ID
     *
     * @remarks
     * Get the media related to the current media item.
     */
    getResourcesMediaIdRelatedMediaFormat(req: operations.GetResourcesMediaIdRelatedMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdRelatedMediaFormatResponse>;
    /**
     * Get syndicated content for MediaItem
     *
     * @remarks
     * Get syndicated content.
     */
    getResourcesMediaIdSyndicateFormat(req: operations.GetResourcesMediaIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdSyndicateFormatResponse>;
    /**
     * Get JPG thumbnail for MediaItem
     *
     * @remarks
     * Get the jpg thumbnail of the content item where applicable.
     */
    getResourcesMediaIdThumbnailJpg(req: operations.GetResourcesMediaIdThumbnailJpgRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdThumbnailJpgResponse>;
    /**
     * Get Youtube metadata for MediaItem
     *
     * @remarks
     * Youtube meta-data for a video item.
     */
    getResourcesMediaIdYoutubeMetaDataJson(req: operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse>;
}
