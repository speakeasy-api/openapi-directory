import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that return predictions for image input.
 */
export declare class VisionPrediction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Detection with Image File
     *
     * @remarks
     * Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.
     */
    detectMultipart(req: shared.ObjectDetectionRequest, security: operations.DetectMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.DetectMultipartResponse>;
    /**
     * Detect Text
     *
     * @remarks
     * Returns a prediction from an OCR model for the specified image URL or local image file.
     */
    ocrMultipart(req: operations.OcrMultipartRequestBody, security: operations.OcrMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.OcrMultipartResponse>;
    /**
     * Make Prediction
     *
     * @remarks
     * Returns a prediction from an image or multi-label model for the specified image.
     */
    predictMultipart(req: shared.ImageClassificationRequest, security: operations.PredictMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.PredictMultipartResponse>;
}
