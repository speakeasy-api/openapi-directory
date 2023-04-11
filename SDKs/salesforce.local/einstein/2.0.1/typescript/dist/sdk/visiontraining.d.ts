import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that handle image dataset training.
 */
export declare class VisionTraining {
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
    getTrainStatusAndProgress1(req: operations.GetTrainStatusAndProgress1Request, security: operations.GetTrainStatusAndProgress1Security, config?: AxiosRequestConfig): Promise<operations.GetTrainStatusAndProgress1Response>;
    /**
     * Retrain a Dataset
     *
     * @remarks
     * Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.
     */
    retrain1(req: operations.Retrain1RequestBody, security: operations.Retrain1Security, config?: AxiosRequestConfig): Promise<operations.Retrain1Response>;
    /**
     * Train a Dataset
     *
     * @remarks
     * Trains a dataset and creates a model.
     */
    train1(req: operations.Train1RequestBody, security: operations.Train1Security, config?: AxiosRequestConfig): Promise<operations.Train1Response>;
}
