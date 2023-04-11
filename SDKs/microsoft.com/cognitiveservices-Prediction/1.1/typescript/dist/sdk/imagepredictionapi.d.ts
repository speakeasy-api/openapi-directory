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
     * Predict an image and saves the result
     */
    predictImage(req: operations.PredictImageRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageResponse>;
    /**
     * Predict an image url without saving the result
     */
    predictImageUrlWithNoStoreForm(req: operations.PredictImageUrlWithNoStoreFormRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreFormResponse>;
    /**
     * Predict an image url without saving the result
     */
    predictImageUrlWithNoStoreJson(req: operations.PredictImageUrlWithNoStoreJsonRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreJsonResponse>;
    /**
     * Predict an image url without saving the result
     */
    predictImageUrlWithNoStoreRaw(req: operations.PredictImageUrlWithNoStoreRawRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlWithNoStoreRawResponse>;
    /**
     * Predict an image url and saves the result
     */
    predictImageUrlForm(req: operations.PredictImageUrlFormRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlFormResponse>;
    /**
     * Predict an image url and saves the result
     */
    predictImageUrlJson(req: operations.PredictImageUrlJsonRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlJsonResponse>;
    /**
     * Predict an image url and saves the result
     */
    predictImageUrlRaw(req: operations.PredictImageUrlRawRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageUrlRawResponse>;
    /**
     * Predict an image without saving the result
     */
    predictImageWithNoStore(req: operations.PredictImageWithNoStoreRequest, config?: AxiosRequestConfig): Promise<operations.PredictImageWithNoStoreResponse>;
}
