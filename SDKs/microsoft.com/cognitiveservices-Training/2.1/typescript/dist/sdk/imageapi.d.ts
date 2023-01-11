import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImageApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createImagesFromData - Add the provided images to the set of training images
     *
     * This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
     * multiple image files can be sent at once, with a maximum of 64 files
    **/
    createImagesFromData(req: operations.CreateImagesFromDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromDataResponse>;
    /**
     * deleteImageRegions - Delete a set of image regions
    **/
    deleteImageRegions(req: operations.DeleteImageRegionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageRegionsResponse>;
    /**
     * deleteImageTags - Remove a set of tags from a set of images
    **/
    deleteImageTags(req: operations.DeleteImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageTagsResponse>;
    /**
     * deleteImages - Delete images from the set of training images
    **/
    deleteImages(req: operations.DeleteImagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesResponse>;
    /**
     * getImagesByIds - Get images by id for a given project iteration
     *
     * This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
     * current workspace is used.
    **/
    getImagesByIds(req: operations.GetImagesByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesByIdsResponse>;
    /**
     * getTaggedImageCount - Gets the number of images tagged with the provided {tagIds}
     *
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
    **/
    getTaggedImageCount(req: operations.GetTaggedImageCountRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImageCountResponse>;
    /**
     * getTaggedImages - Get tagged images for a given project iteration
     *
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
    **/
    getTaggedImages(req: operations.GetTaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImagesResponse>;
    /**
     * getUntaggedImageCount - Gets the number of untagged images
     *
     * This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
     * current workspace is used.
    **/
    getUntaggedImageCount(req: operations.GetUntaggedImageCountRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImageCountResponse>;
    /**
     * getUntaggedImages - Get untagged images for a given project iteration
     *
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
    **/
    getUntaggedImages(req: operations.GetUntaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImagesResponse>;
}
