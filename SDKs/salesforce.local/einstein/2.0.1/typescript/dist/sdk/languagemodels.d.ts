import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage text models and model metrics.
 */
export declare class LanguageModels {
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
    deleteModel(req: operations.DeleteModelRequest, security: operations.DeleteModelSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * Get Model Learning Curve
     *
     * @remarks
     * Returns the metrics for each epoch in a model.
     */
    getTrainedModelLearningCurve(req: operations.GetTrainedModelLearningCurveRequest, security: operations.GetTrainedModelLearningCurveSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelLearningCurveResponse>;
    /**
     * Get Model Metrics
     *
     * @remarks
     * Returns the metrics for a model
     */
    getTrainedModelMetrics(req: operations.GetTrainedModelMetricsRequest, security: operations.GetTrainedModelMetricsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelMetricsResponse>;
    /**
     * Get All Models
     *
     * @remarks
     * Returns all models for the specified dataset.
     */
    getTrainedModels(req: operations.GetTrainedModelsRequest, security: operations.GetTrainedModelsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTrainedModelsResponse>;
}
