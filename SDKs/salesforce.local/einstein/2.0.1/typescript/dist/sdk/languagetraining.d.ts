import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that handle text dataset training.
 */
export declare class LanguageTraining {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Training Status
     *
     * @remarks
     * Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.
     */
    getTrainStatusAndProgress(req: operations.GetTrainStatusAndProgressRequest, security: operations.GetTrainStatusAndProgressSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrainStatusAndProgressResponse>;
    /**
     * Retrain a Dataset
     *
     * @remarks
     * Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
     */
    retrain(req: operations.RetrainRequestBody, security: operations.RetrainSecurity, config?: AxiosRequestConfig): Promise<operations.RetrainResponse>;
    /**
     * Train a Dataset
     *
     * @remarks
     * Trains a dataset and creates a model.
     */
    train(req: operations.TrainRequestBody, security: operations.TrainSecurity, config?: AxiosRequestConfig): Promise<operations.TrainResponse>;
}
