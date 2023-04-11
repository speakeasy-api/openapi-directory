import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ImageApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a set of image regions.
     *
     * @remarks
     * This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
     * There is a limit of 64 entries in the batch.
     */
    createImageRegionsForm(req: operations.CreateImageRegionsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageRegionsFormResponse>;
    /**
     * Create a set of image regions.
     *
     * @remarks
     * This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
     * There is a limit of 64 entries in the batch.
     */
    createImageRegionsJson(req: operations.CreateImageRegionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageRegionsJsonResponse>;
    /**
     * Create a set of image regions.
     *
     * @remarks
     * This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
     * There is a limit of 64 entries in the batch.
     */
    createImageRegionsRaw(req: operations.CreateImageRegionsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageRegionsRawResponse>;
    /**
     * Associate a set of images with a set of tags.
     */
    createImageTagsForm(req: operations.CreateImageTagsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageTagsFormResponse>;
    /**
     * Associate a set of images with a set of tags.
     */
    createImageTagsJson(req: operations.CreateImageTagsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageTagsJsonResponse>;
    /**
     * Associate a set of images with a set of tags.
     */
    createImageTagsRaw(req: operations.CreateImageTagsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageTagsRawResponse>;
    /**
     * Add the provided images to the set of training images.
     *
     * @remarks
     * This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
     * multiple image files can be sent at once, with a maximum of 64 files
     */
    createImagesFromData(req: operations.CreateImagesFromDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromDataResponse>;
    /**
     * Add the provided batch of images to the set of training images.
     *
     * @remarks
     * This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromFilesForm(req: operations.CreateImagesFromFilesFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesFormResponse>;
    /**
     * Add the provided batch of images to the set of training images.
     *
     * @remarks
     * This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromFilesJson(req: operations.CreateImagesFromFilesJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesJsonResponse>;
    /**
     * Add the provided batch of images to the set of training images.
     *
     * @remarks
     * This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromFilesRaw(req: operations.CreateImagesFromFilesRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesRawResponse>;
    /**
     * Add the specified predicted images to the set of training images.
     *
     * @remarks
     * This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.
     */
    createImagesFromPredictionsForm(req: operations.CreateImagesFromPredictionsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsFormResponse>;
    /**
     * Add the specified predicted images to the set of training images.
     *
     * @remarks
     * This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.
     */
    createImagesFromPredictionsJson(req: operations.CreateImagesFromPredictionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsJsonResponse>;
    /**
     * Add the specified predicted images to the set of training images.
     *
     * @remarks
     * This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.
     */
    createImagesFromPredictionsRaw(req: operations.CreateImagesFromPredictionsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsRawResponse>;
    /**
     * Add the provided images urls to the set of training images.
     *
     * @remarks
     * This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromUrlsForm(req: operations.CreateImagesFromUrlsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsFormResponse>;
    /**
     * Add the provided images urls to the set of training images.
     *
     * @remarks
     * This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromUrlsJson(req: operations.CreateImagesFromUrlsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsJsonResponse>;
    /**
     * Add the provided images urls to the set of training images.
     *
     * @remarks
     * This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.
     */
    createImagesFromUrlsRaw(req: operations.CreateImagesFromUrlsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsRawResponse>;
    /**
     * Delete a set of image regions.
     */
    deleteImageRegions(req: operations.DeleteImageRegionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageRegionsResponse>;
    /**
     * Remove a set of tags from a set of images.
     */
    deleteImageTags(req: operations.DeleteImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageTagsResponse>;
    /**
     * Delete images from the set of training images.
     */
    deleteImages(req: operations.DeleteImagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesResponse>;
    /**
     * Get images by id for a given project iteration.
     *
     * @remarks
     * This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
     * current workspace is used.
     */
    getImagesByIds(req: operations.GetImagesByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesByIdsResponse>;
    /**
     * Gets the number of images tagged with the provided {tagIds}.
     *
     * @remarks
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
     */
    getTaggedImageCount(req: operations.GetTaggedImageCountRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImageCountResponse>;
    /**
     * Get tagged images for a given project iteration.
     *
     * @remarks
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
     */
    getTaggedImages(req: operations.GetTaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImagesResponse>;
    /**
     * Gets the number of untagged images.
     *
     * @remarks
     * This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
     * current workspace is used.
     */
    getUntaggedImageCount(req: operations.GetUntaggedImageCountRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImageCountResponse>;
    /**
     * Get untagged images for a given project iteration.
     *
     * @remarks
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     */
    getUntaggedImages(req: operations.GetUntaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImagesResponse>;
    /**
     * Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
     *
     * @remarks
     * This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.
     */
    querySuggestedImageCountForm(req: operations.QuerySuggestedImageCountFormRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImageCountFormResponse>;
    /**
     * Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
     *
     * @remarks
     * This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.
     */
    querySuggestedImageCountJson(req: operations.QuerySuggestedImageCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImageCountJsonResponse>;
    /**
     * Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
     *
     * @remarks
     * This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.
     */
    querySuggestedImageCountRaw(req: operations.QuerySuggestedImageCountRawRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImageCountRawResponse>;
    /**
     * Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
     *
     * @remarks
     * This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.
     */
    querySuggestedImagesForm(req: operations.QuerySuggestedImagesFormRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImagesFormResponse>;
    /**
     * Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
     *
     * @remarks
     * This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.
     */
    querySuggestedImagesJson(req: operations.QuerySuggestedImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImagesJsonResponse>;
    /**
     * Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
     *
     * @remarks
     * This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.
     */
    querySuggestedImagesRaw(req: operations.QuerySuggestedImagesRawRequest, config?: AxiosRequestConfig): Promise<operations.QuerySuggestedImagesRawResponse>;
}
