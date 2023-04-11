import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ImagePredictionApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Classify an image and saves the result.
     */
    classifyImage(req: operations.ClassifyImageRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageResponse>;
    /**
     * Classify an image url without saving the result.
     */
    classifyImageUrlWithNoStoreForm(req: operations.ClassifyImageUrlWithNoStoreFormRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlWithNoStoreFormResponse>;
    /**
     * Classify an image url without saving the result.
     */
    classifyImageUrlWithNoStoreJson(req: operations.ClassifyImageUrlWithNoStoreJsonRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlWithNoStoreJsonResponse>;
    /**
     * Classify an image url without saving the result.
     */
    classifyImageUrlWithNoStoreRaw(req: operations.ClassifyImageUrlWithNoStoreRawRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlWithNoStoreRawResponse>;
    /**
     * Classify an image url and saves the result.
     */
    classifyImageUrlForm(req: operations.ClassifyImageUrlFormRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlFormResponse>;
    /**
     * Classify an image url and saves the result.
     */
    classifyImageUrlJson(req: operations.ClassifyImageUrlJsonRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlJsonResponse>;
    /**
     * Classify an image url and saves the result.
     */
    classifyImageUrlRaw(req: operations.ClassifyImageUrlRawRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlRawResponse>;
    /**
     * Classify an image without saving the result.
     */
    classifyImageWithNoStore(req: operations.ClassifyImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageWithNoStoreResponse>;
    /**
     * Detect objects in an image and saves the result.
     */
    detectImage(req: operations.DetectImageRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageResponse>;
    /**
     * Detect objects in an image url without saving the result.
     */
    detectImageUrlWithNoStoreForm(req: operations.DetectImageUrlWithNoStoreFormRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlWithNoStoreFormResponse>;
    /**
     * Detect objects in an image url without saving the result.
     */
    detectImageUrlWithNoStoreJson(req: operations.DetectImageUrlWithNoStoreJsonRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlWithNoStoreJsonResponse>;
    /**
     * Detect objects in an image url without saving the result.
     */
    detectImageUrlWithNoStoreRaw(req: operations.DetectImageUrlWithNoStoreRawRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlWithNoStoreRawResponse>;
    /**
     * Detect objects in an image url and saves the result.
     */
    detectImageUrlForm(req: operations.DetectImageUrlFormRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlFormResponse>;
    /**
     * Detect objects in an image url and saves the result.
     */
    detectImageUrlJson(req: operations.DetectImageUrlJsonRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlJsonResponse>;
    /**
     * Detect objects in an image url and saves the result.
     */
    detectImageUrlRaw(req: operations.DetectImageUrlRawRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlRawResponse>;
    /**
     * Detect objects in an image without saving the result.
     */
    detectImageWithNoStore(req: operations.DetectImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageWithNoStoreResponse>;
}
