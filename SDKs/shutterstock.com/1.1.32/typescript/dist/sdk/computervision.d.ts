import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ComputerVision {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List suggested keywords
     *
     * @remarks
     * This endpoint returns a list of suggested keywords for a media item that you specify or upload.
     */
    getKeywords(req: operations.GetKeywordsRequest, security: operations.GetKeywordsSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeywordsResponse>;
    /**
     * List similar images
     *
     * @remarks
     * This endpoint returns images that are visually similar to an image that you specify or upload.
     */
    getSimilarImages(req: operations.GetSimilarImagesRequest, security: operations.GetSimilarImagesSecurity, config?: AxiosRequestConfig): Promise<operations.GetSimilarImagesResponse>;
    /**
     * List similar videos
     *
     * @remarks
     * This endpoint returns videos that are visually similar to an image that you specify or upload.
     */
    getSimilarVideos(req: operations.GetSimilarVideosRequest, security: operations.GetSimilarVideosSecurity, config?: AxiosRequestConfig): Promise<operations.GetSimilarVideosResponse>;
    /**
     * Upload ephemeral images
     *
     * @remarks
     * Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.
     */
    uploadEphemeralImage(req: shared.ImageCreateRequest, security: operations.UploadEphemeralImageSecurity, config?: AxiosRequestConfig): Promise<operations.UploadEphemeralImageResponse>;
    /**
     * Upload images
     *
     * @remarks
     * This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.
     */
    uploadImage(req: shared.ImageCreateRequest, security: operations.UploadImageSecurity, config?: AxiosRequestConfig): Promise<operations.UploadImageResponse>;
}
