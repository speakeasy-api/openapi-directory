import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addImageCollectionItems - Add images to collections
     *
     * This endpoint adds one or more images to a collection by image IDs.
    **/
    addImageCollectionItems(req: operations.AddImageCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.AddImageCollectionItemsResponse>;
    /**
     * createImageCollection - Create image collections
     *
     * This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.
    **/
    createImageCollection(req: operations.CreateImageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageCollectionResponse>;
    /**
     * deleteImageCollection - Delete image collections
     *
     * This endpoint deletes an image collection.
    **/
    deleteImageCollection(req: operations.DeleteImageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageCollectionResponse>;
    /**
     * deleteImageCollectionItems - Remove images from collections
     *
     * This endpoint removes one or more images from a collection.
    **/
    deleteImageCollectionItems(req: operations.DeleteImageCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageCollectionItemsResponse>;
    /**
     * downloadImage - Download images
     *
     * This endpoint redownloads images that you have already received a license for.
    **/
    downloadImage(req: operations.DownloadImageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadImageResponse>;
    /**
     * getFeaturedImageCollection - Get the details of featured image collections
     *
     * This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.
    **/
    getFeaturedImageCollection(req: operations.GetFeaturedImageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionResponse>;
    /**
     * getFeaturedImageCollectionItems - Get the contents of featured image collections
     *
     * This endpoint lists the IDs of images in a featured collection and the date that each was added.
    **/
    getFeaturedImageCollectionItems(req: operations.GetFeaturedImageCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionItemsResponse>;
    /**
     * getFeaturedImageCollectionList - List featured image collections
     *
     * This endpoint lists featured collections of specific types and a name and cover image for each collection.
    **/
    getFeaturedImageCollectionList(req: operations.GetFeaturedImageCollectionListRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturedImageCollectionListResponse>;
    /**
     * getImage - Get details about images
     *
     * This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.
    **/
    getImage(req: operations.GetImageRequest, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * getImageCollection - Get the details of image collections
     *
     * This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.
    **/
    getImageCollection(req: operations.GetImageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionResponse>;
    /**
     * getImageCollectionItems - Get the contents of image collections
     *
     * This endpoint lists the IDs of images in a collection and the date that each was added.
    **/
    getImageCollectionItems(req: operations.GetImageCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionItemsResponse>;
    /**
     * getImageCollectionList - List image collections
     *
     * This endpoint lists your collections of images and their basic attributes.
    **/
    getImageCollectionList(req: operations.GetImageCollectionListRequest, config?: AxiosRequestConfig): Promise<operations.GetImageCollectionListResponse>;
    /**
     * getImageKeywordSuggestions - Get keywords from text
     *
     * This endpoint returns up to 10 important keywords from a block of plain text.
    **/
    getImageKeywordSuggestions(req: operations.GetImageKeywordSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageKeywordSuggestionsResponse>;
    /**
     * getImageLicenseList - List image licenses
     *
     * This endpoint lists existing licenses.
    **/
    getImageLicenseList(req: operations.GetImageLicenseListRequest, config?: AxiosRequestConfig): Promise<operations.GetImageLicenseListResponse>;
    /**
     * getImageList - List images
     *
     * This endpoint lists information about one or more images, including the available sizes.
    **/
    getImageList(req: operations.GetImageListRequest, config?: AxiosRequestConfig): Promise<operations.GetImageListResponse>;
    /**
     * getImageRecommendations - List recommended images
     *
     * This endpoint returns images that customers put in the same collection as the specified image IDs.
    **/
    getImageRecommendations(req: operations.GetImageRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRecommendationsResponse>;
    /**
     * getImageSuggestions - Get suggestions for a search term
     *
     * This endpoint provides autocomplete suggestions for partial search terms.
    **/
    getImageSuggestions(req: operations.GetImageSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetImageSuggestionsResponse>;
    /**
     * getSimilarImages - List similar images
     *
     * This endpoint returns images that are visually similar to an image that you specify.
    **/
    getSimilarImages(req: operations.GetSimilarImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarImagesResponse>;
    /**
     * getUpdatedImages - List updated images
     *
     * This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.
    **/
    getUpdatedImages(req: operations.GetUpdatedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatedImagesResponse>;
    /**
     * licenseImages - License images
     *
     * This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters.
    **/
    licenseImages(req: operations.LicenseImagesRequest, config?: AxiosRequestConfig): Promise<operations.LicenseImagesResponse>;
    /**
     * listImageCategories - List image categories
     *
     * This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.
    **/
    listImageCategories(req: operations.ListImageCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListImageCategoriesResponse>;
    /**
     * renameImageCollection - Rename image collections
     *
     * This endpoint sets a new name for an image collection.
    **/
    renameImageCollection(req: operations.RenameImageCollectionRequest, config?: AxiosRequestConfig): Promise<operations.RenameImageCollectionResponse>;
    /**
     * searchImages - Search for images
     *
     * This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.
    **/
    searchImages(req: operations.SearchImagesRequest, config?: AxiosRequestConfig): Promise<operations.SearchImagesResponse>;
}
