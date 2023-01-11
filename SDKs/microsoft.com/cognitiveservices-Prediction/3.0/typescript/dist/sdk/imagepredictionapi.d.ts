import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImagePredictionApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * classifyImage - Classify an image and saves the result.
    **/
    classifyImage(req: operations.ClassifyImageRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageResponse>;
    /**
     * classifyImageUrl - Classify an image url and saves the result.
    **/
    classifyImageUrl(req: operations.ClassifyImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlResponse>;
    /**
     * classifyImageUrlWithNoStore - Classify an image url without saving the result.
    **/
    classifyImageUrlWithNoStore(req: operations.ClassifyImageUrlWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageUrlWithNoStoreResponse>;
    /**
     * classifyImageWithNoStore - Classify an image without saving the result.
    **/
    classifyImageWithNoStore(req: operations.ClassifyImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyImageWithNoStoreResponse>;
    /**
     * detectImage - Detect objects in an image and saves the result.
    **/
    detectImage(req: operations.DetectImageRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageResponse>;
    /**
     * detectImageUrl - Detect objects in an image url and saves the result.
    **/
    detectImageUrl(req: operations.DetectImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlResponse>;
    /**
     * detectImageUrlWithNoStore - Detect objects in an image url without saving the result.
    **/
    detectImageUrlWithNoStore(req: operations.DetectImageUrlWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageUrlWithNoStoreResponse>;
    /**
     * detectImageWithNoStore - Detect objects in an image without saving the result.
    **/
    detectImageWithNoStore(req: operations.DetectImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.DetectImageWithNoStoreResponse>;
}
