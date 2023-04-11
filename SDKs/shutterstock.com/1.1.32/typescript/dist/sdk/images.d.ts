import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add images to collections
     *
     * @remarks
     * This endpoint adds one or more images to a collection by image IDs.
     */
    addImageCollectionItems(req: operations.AddImageCollectionItemsRequest, security: operations.AddImageCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.AddImageCollectionItemsResponse>;
    /**
     * Run multiple image searches
     *
     * @remarks
     * This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.
     */
    bulkSearchImages(req: operations.BulkSearchImagesRequest, security: operations.BulkSearchImagesSecurity, config?: AxiosRequestConfig): Promise<operations.BulkSearchImagesResponse>;
    /**
     * Create image collections
     *
     * @remarks
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
     */
    createImageCollection(req: shared.CollectionCreateRequest, security: operations.CreateImageCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateImageCollectionResponse>;
    /**
     * Delete image collections
     *
     * @remarks
     * This endpoint deletes an image collection.
     */
    deleteImageCollection(req: operations.DeleteImageCollectionRequest, security: operations.DeleteImageCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteImageCollectionResponse>;
    /**
     * Remove images from collections
     *
     * @remarks
     * This endpoint removes one or more images from a collection.
     */
    deleteImageCollectionItems(req: operations.DeleteImageCollectionItemsRequest, security: operations.DeleteImageCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteImageCollectionItemsResponse>;
    /**
     * Download images
     *
     * @remarks
     * This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.
     */
    downloadImage(req: operations.DownloadImageRequest, security: operations.DownloadImageSecurity, config?: AxiosRequestConfig): Promise<operations.DownloadImageResponse>;
    /**
     * Get the details of featured image collections
     *
     * @remarks
     * This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.
     */
    getFeaturedImageCollection(req: operations.GetFeaturedImageCollectionRequest, security: operations.GetFeaturedImageCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionResponse>;
    /**
     * Get the contents of featured image collections
     *
     * @remarks
     * This endpoint lists the IDs of images in a featured collection and the date that each was added.
     */
    getFeaturedImageCollectionItems(req: operations.GetFeaturedImageCollectionItemsRequest, security: operations.GetFeaturedImageCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionItemsResponse>;
    /**
     * List featured image collections
     *
     * @remarks
     * This endpoint lists featured collections of specific types and a name and cover image for each collection.
     */
    getFeaturedImageCollectionList(req: operations.GetFeaturedImageCollectionListRequest, security: operations.GetFeaturedImageCollectionListSecurity, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionListResponse>;
    /**
     * Get details about images
     *
     * @remarks
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
     */
    getImage(req: operations.GetImageRequest, security: operations.GetImageSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * Get the details of image collections
     *
     * @remarks
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
     */
    getImageCollection(req: operations.GetImageCollectionRequest, security: operations.GetImageCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionResponse>;
    /**
     * Get the contents of image collections
     *
     * @remarks
     * This endpoint lists the IDs of images in a collection and the date that each was added.
     */
    getImageCollectionItems(req: operations.GetImageCollectionItemsRequest, security: operations.GetImageCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionItemsResponse>;
    /**
     * List image collections
     *
     * @remarks
     * This endpoint lists your collections of images and their basic attributes.
     */
    getImageCollectionList(req: operations.GetImageCollectionListRequest, security: operations.GetImageCollectionListSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionListResponse>;
    /**
     * Get keywords from text
     *
     * @remarks
     * This endpoint returns up to 10 important keywords from a block of plain text.
     */
    getImageKeywordSuggestions(req: shared.SearchEntitiesRequest, security: operations.GetImageKeywordSuggestionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageKeywordSuggestionsResponse>;
    /**
     * List image licenses
     *
     * @remarks
     * This endpoint lists existing licenses.
     */
    getImageLicenseList(req: operations.GetImageLicenseListRequest, security: operations.GetImageLicenseListSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageLicenseListResponse>;
    /**
     * List images
     *
     * @remarks
     * This endpoint lists information about one or more images, including the available sizes.
     */
    getImageList(req: operations.GetImageListRequest, security: operations.GetImageListSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageListResponse>;
    /**
     * List recommended images
     *
     * @remarks
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
     */
    getImageRecommendations(req: operations.GetImageRecommendationsRequest, security: operations.GetImageRecommendationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageRecommendationsResponse>;
    /**
     * Get suggestions for a search term
     *
     * @remarks
     * This endpoint provides autocomplete suggestions for partial search terms.
     */
    getImageSuggestions(req: operations.GetImageSuggestionsRequest, security: operations.GetImageSuggestionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetImageSuggestionsResponse>;
    /**
     * List updated images
     *
     * @remarks
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
     */
    getUpdatedImages(req: operations.GetUpdatedImagesRequest, security: operations.GetUpdatedImagesSecurity, config?: AxiosRequestConfig): Promise<operations.GetUpdatedImagesResponse>;
    /**
     * License images
     *
     * @remarks
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.
     */
    licenseImages(req: operations.LicenseImagesRequest, security: operations.LicenseImagesSecurity, config?: AxiosRequestConfig): Promise<operations.LicenseImagesResponse>;
    /**
     * List image categories
     *
     * @remarks
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
     */
    listImageCategories(req: operations.ListImageCategoriesRequest, security: operations.ListImageCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.ListImageCategoriesResponse>;
    /**
     * List similar images
     *
     * @remarks
     * This endpoint returns images that are visually similar to an image that you specify.
     */
    listSimilarImages(req: operations.ListSimilarImagesRequest, security: operations.ListSimilarImagesSecurity, config?: AxiosRequestConfig): Promise<operations.ListSimilarImagesResponse>;
    /**
     * Rename image collections
     *
     * @remarks
     * This endpoint sets a new name for an image collection.
     */
    renameImageCollection(req: operations.RenameImageCollectionRequest, security: operations.RenameImageCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.RenameImageCollectionResponse>;
    /**
     * Search for images
     *
     * @remarks
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
     */
    searchImages(req: operations.SearchImagesRequest, security: operations.SearchImagesSecurity, config?: AxiosRequestConfig): Promise<operations.SearchImagesResponse>;
}
