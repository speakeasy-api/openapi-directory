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
     * Add the provided images to the set of training images
     *
     * @remarks
     * This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
     * multiple image files can be sent at once, with a maximum of 64 files
     */
    createImagesFromData(req: operations.CreateImagesFromDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromDataResponse>;
    /**
     * Add the provided batch of images to the set of training images
     */
    createImagesFromFilesForm(req: operations.CreateImagesFromFilesFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesFormResponse>;
    /**
     * Add the provided batch of images to the set of training images
     */
    createImagesFromFilesJson(req: operations.CreateImagesFromFilesJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesJsonResponse>;
    /**
     * Add the provided batch of images to the set of training images
     */
    createImagesFromFilesRaw(req: operations.CreateImagesFromFilesRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromFilesRawResponse>;
    /**
     * Add the specified predicted images to the set of training images
     */
    createImagesFromPredictionsForm(req: operations.CreateImagesFromPredictionsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsFormResponse>;
    /**
     * Add the specified predicted images to the set of training images
     */
    createImagesFromPredictionsJson(req: operations.CreateImagesFromPredictionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsJsonResponse>;
    /**
     * Add the specified predicted images to the set of training images
     */
    createImagesFromPredictionsRaw(req: operations.CreateImagesFromPredictionsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromPredictionsRawResponse>;
    /**
     * Add the provided images urls to the set of training images
     */
    createImagesFromUrlsForm(req: operations.CreateImagesFromUrlsFormRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsFormResponse>;
    /**
     * Add the provided images urls to the set of training images
     */
    createImagesFromUrlsJson(req: operations.CreateImagesFromUrlsJsonRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsJsonResponse>;
    /**
     * Add the provided images urls to the set of training images
     */
    createImagesFromUrlsRaw(req: operations.CreateImagesFromUrlsRawRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromUrlsRawResponse>;
    /**
     * Remove a set of tags from a set of images
     */
    deleteImageTags(req: operations.DeleteImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageTagsResponse>;
    /**
     * Delete images from the set of training images
     */
    deleteImages(req: operations.DeleteImagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesResponse>;
    /**
     * Get tagged images for a given project iteration
     *
     * @remarks
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
     */
    getTaggedImages(req: operations.GetTaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImagesResponse>;
    /**
     * Get untagged images for a given project iteration
     *
     * @remarks
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     */
    getUntaggedImages(req: operations.GetUntaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImagesResponse>;
    /**
     * Associate a set of images with a set of tags
     */
    postImageTagsForm(req: operations.PostImageTagsFormRequest, config?: AxiosRequestConfig): Promise<operations.PostImageTagsFormResponse>;
    /**
     * Associate a set of images with a set of tags
     */
    postImageTagsJson(req: operations.PostImageTagsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostImageTagsJsonResponse>;
    /**
     * Associate a set of images with a set of tags
     */
    postImageTagsRaw(req: operations.PostImageTagsRawRequest, config?: AxiosRequestConfig): Promise<operations.PostImageTagsRawResponse>;
}
