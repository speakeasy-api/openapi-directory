import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PredictionsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePrediction - Delete a set of predicted images and their associated prediction results
    **/
    deletePrediction(req: operations.DeletePredictionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePredictionResponse>;
    /**
     * quickTestImage - Quick test an image
    **/
    quickTestImage(req: operations.QuickTestImageRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageResponse>;
    /**
     * quickTestImageUrl - Quick test an image url
    **/
    quickTestImageUrl(req: operations.QuickTestImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageUrlResponse>;
}
