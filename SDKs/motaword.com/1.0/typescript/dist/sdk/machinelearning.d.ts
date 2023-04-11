import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MachineLearning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a delivery prediction for a project
     *
     * @remarks
     * Get a delivery prediction for a project
     */
    getDeliveryPrediction(req: shared.DeliveryPredictionPayload, config?: AxiosRequestConfig): Promise<operations.GetDeliveryPredictionResponse>;
}
