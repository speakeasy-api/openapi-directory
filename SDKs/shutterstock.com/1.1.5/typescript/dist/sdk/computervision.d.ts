import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ComputerVision {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getKeywords - List suggested keywords
     *
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
    **/
    getKeywords(req: operations.GetKeywordsRequest, config?: AxiosRequestConfig): Promise<operations.GetKeywordsResponse>;
    /**
     * getV2CvSimilarImages - List similar images
     *
     * This endpoint returns images that are visually similar to an image that you specify or upload.
    **/
    getV2CvSimilarImages(req: operations.GetV2CvSimilarImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CvSimilarImagesResponse>;
    /**
     * getV2CvSimilarVideos - List similar videos
     *
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
    **/
    getV2CvSimilarVideos(req: operations.GetV2CvSimilarVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CvSimilarVideosResponse>;
    /**
     * uploadEphemeralImage - Upload ephemeral images
     *
     * Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.
    **/
    uploadEphemeralImage(req: operations.UploadEphemeralImageRequest, config?: AxiosRequestConfig): Promise<operations.UploadEphemeralImageResponse>;
    /**
     * uploadImage - Upload images
     *
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
    **/
    uploadImage(req: operations.UploadImageRequest, config?: AxiosRequestConfig): Promise<operations.UploadImageResponse>;
}
