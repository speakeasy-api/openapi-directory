import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Predictions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get predictions for a given year
     *
     * @remarks
     * Get all predictions for a given year.
     */
    predictions(req: operations.PredictionsRequest, config?: AxiosRequestConfig): Promise<operations.PredictionsResponse>;
}
