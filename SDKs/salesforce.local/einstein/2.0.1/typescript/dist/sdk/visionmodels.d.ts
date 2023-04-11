import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage image models and model metrics.
 */
export declare class VisionModels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Model
     *
     * @remarks
     * Deletes the specified model.
     */
    deleteModel1(req: operations.DeleteModel1Request, security: operations.DeleteModel1Security, config?: AxiosRequestConfig): Promise<operations.DeleteModel1Response>;
    /**
     * Get Model Learning Curve
     *
     * @remarks
     * Returns the metrics for each epoch in a model.
     */
    getTrainedModelLearningCurve1(req: operations.GetTrainedModelLearningCurve1Request, security: operations.GetTrainedModelLearningCurve1Security, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurve1Response>;
    /**
     * Get Model Metrics
     *
     * @remarks
     * Returns the metrics for a model
     */
    getTrainedModelMetrics1(req: operations.GetTrainedModelMetrics1Request, security: operations.GetTrainedModelMetrics1Security, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetrics1Response>;
    /**
     * Get All Models
     *
     * @remarks
     * Returns all models for the specified dataset.
     */
    getTrainedModels1(req: operations.GetTrainedModels1Request, security: operations.GetTrainedModels1Security, config?: AxiosRequestConfig): Promise<operations.GetTrainedModels1Response>;
}
