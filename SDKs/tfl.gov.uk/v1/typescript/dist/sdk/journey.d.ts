import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Journey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Perform a Journey Planner search from the parameters specified in simple types
     */
    journeyJourneyResults(req: operations.JourneyJourneyResultsRequest, config?: AxiosRequestConfig): Promise<operations.JourneyJourneyResultsResponse>;
    /**
     * Gets a list of all of the available journey planner modes
     */
    journeyMeta(config?: AxiosRequestConfig): Promise<operations.JourneyMetaResponse>;
}
