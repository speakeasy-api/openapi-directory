import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to get insights of podcasts, e.g., audience demographics
 */
export declare class InsightsAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch audience demographics for a podcast
     *
     * @remarks
     * Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.
     */
    getPodcastAudience(req: operations.GetPodcastAudienceRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastAudienceResponse>;
}
