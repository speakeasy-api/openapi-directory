import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://westcentralus.api.cognitive.microsoft.com/vision/v2.1", "https://{Endpoint}/vision/v2.1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * This operation extracts a rich set of visual features based on the image content.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    analyzeImage(req: operations.AnalyzeImageRequest, config?: AxiosRequestConfig): Promise<operations.AnalyzeImageResponse>;
    /**
     * This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON.
     * If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    analyzeImageByDomain(req: operations.AnalyzeImageByDomainRequest, config?: AxiosRequestConfig): Promise<operations.AnalyzeImageByDomainResponse>;
    /**
     * This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. Descriptions may include results from celebrity and landmark domain models, if applicable.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    describeImage(req: operations.DescribeImageRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageResponse>;
    /**
     * Performs object detection on the specified image.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    detectObjects(req: shared.ImageUrl, config?: AxiosRequestConfig): Promise<operations.DetectObjectsResponse>;
    /**
     * This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
     * A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
     */
    generateThumbnail(req: operations.GenerateThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GenerateThumbnailResponse>;
    /**
     * This operation returns a bounding box around the most important area of the image.
     * A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
     */
    getAreaOfInterest(req: shared.ImageUrl, config?: AxiosRequestConfig): Promise<operations.GetAreaOfInterestResponse>;
    /**
     * This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    listModels(config?: AxiosRequestConfig): Promise<operations.ListModelsResponse>;
    /**
     * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
     * Upon success, the OCR results will be returned.
     * Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.
     */
    recognizePrintedText(req: operations.RecognizePrintedTextRequest, config?: AxiosRequestConfig): Promise<operations.RecognizePrintedTextResponse>;
    /**
     * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the hint "fungus".
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
     */
    tagImage(req: operations.TagImageRequest, config?: AxiosRequestConfig): Promise<operations.TagImageResponse>;
}
