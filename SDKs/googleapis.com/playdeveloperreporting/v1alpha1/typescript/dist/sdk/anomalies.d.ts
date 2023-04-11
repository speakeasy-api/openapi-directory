import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Anomalies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists anomalies in any of the datasets.
     */
    playdeveloperreportingAnomaliesList(req: operations.PlaydeveloperreportingAnomaliesListRequest, security: operations.PlaydeveloperreportingAnomaliesListSecurity, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingAnomaliesListResponse>;
}
