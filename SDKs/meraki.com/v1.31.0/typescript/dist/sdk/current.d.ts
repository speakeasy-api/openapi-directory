import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Current {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return an overview of currently alerting sensors by metric
     *
     * @remarks
     * Return an overview of currently alerting sensors by metric
     */
    getNetworkSensorAlertsCurrentOverviewByMetric(req: operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse>;
}
