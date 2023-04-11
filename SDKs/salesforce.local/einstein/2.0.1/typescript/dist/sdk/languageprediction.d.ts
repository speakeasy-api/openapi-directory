import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that return predictions for text input.
 */
export declare class LanguagePrediction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Prediction for Intent
     *
     * @remarks
     * Returns an intent prediction for the given string.
     */
    intentMultipart(req: shared.IntentPredictRequest, security: operations.IntentMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.IntentMultipartResponse>;
    /**
     * Prediction for Sentiment
     *
     * @remarks
     * Returns a sentiment prediction for the given string.
     */
    sentimentMultipart(req: shared.SentimentPredictRequest, security: operations.SentimentMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.SentimentMultipartResponse>;
}
