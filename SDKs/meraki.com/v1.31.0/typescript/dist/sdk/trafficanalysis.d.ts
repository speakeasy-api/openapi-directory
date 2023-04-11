import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TrafficAnalysis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the traffic analysis settings for a network
     *
     * @remarks
     * Return the traffic analysis settings for a network
     */
    getNetworkTrafficAnalysis(req: operations.GetNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficAnalysisResponse>;
    /**
     * Update the traffic analysis settings for a network
     *
     * @remarks
     * Update the traffic analysis settings for a network
     */
    updateNetworkTrafficAnalysis(req: operations.UpdateNetworkTrafficAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkTrafficAnalysisResponse>;
}
