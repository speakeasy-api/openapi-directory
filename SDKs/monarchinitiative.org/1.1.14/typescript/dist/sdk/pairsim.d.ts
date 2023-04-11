import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * pairwise similarity between two entities
 */
export declare class PairSim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get pairwise similarity
     */
    getPairSimJaccardResource(req: operations.GetPairSimJaccardResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetPairSimJaccardResourceResponse>;
}
