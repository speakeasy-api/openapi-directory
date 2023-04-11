import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PredictionsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a set of predicted images and their associated prediction results
     */
    deletePrediction(req: operations.DeletePredictionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePredictionResponse>;
    /**
     * Get images that were sent to your prediction endpoint
     */
    queryPredictionsForm(req: operations.QueryPredictionsFormRequest, config?: AxiosRequestConfig): Promise<operations.QueryPredictionsFormResponse>;
    /**
     * Get images that were sent to your prediction endpoint
     */
    queryPredictionsJson(req: operations.QueryPredictionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.QueryPredictionsJsonResponse>;
    /**
     * Get images that were sent to your prediction endpoint
     */
    queryPredictionsRaw(req: operations.QueryPredictionsRawRequest, config?: AxiosRequestConfig): Promise<operations.QueryPredictionsRawResponse>;
    /**
     * Quick test an image
     */
    quickTestImage(req: operations.QuickTestImageRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageResponse>;
    /**
     * Quick test an image url
     */
    quickTestImageUrlForm(req: operations.QuickTestImageUrlFormRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageUrlFormResponse>;
    /**
     * Quick test an image url
     */
    quickTestImageUrlJson(req: operations.QuickTestImageUrlJsonRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageUrlJsonResponse>;
    /**
     * Quick test an image url
     */
    quickTestImageUrlRaw(req: operations.QuickTestImageUrlRawRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageUrlRawResponse>;
}
