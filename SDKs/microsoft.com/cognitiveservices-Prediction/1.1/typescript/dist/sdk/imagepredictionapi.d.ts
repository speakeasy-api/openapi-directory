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
     * predictImage - Predict an image and saves the result
    **/
    predictImage(req: operations.PredictImageRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageResponse>;
    /**
     * predictImageUrl - Predict an image url and saves the result
    **/
    predictImageUrl(req: operations.PredictImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlResponse>;
    /**
     * predictImageUrlWithNoStore - Predict an image url without saving the result
    **/
    predictImageUrlWithNoStore(req: operations.PredictImageUrlWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreResponse>;
    /**
     * predictImageWithNoStore - Predict an image without saving the result
    **/
    predictImageWithNoStore(req: operations.PredictImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageWithNoStoreResponse>;
}
