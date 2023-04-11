import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Perform semantic similarity, ranking, and sufficiency scoring
 */
export declare class Sim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get annotation score
     */
    getAnnotationScore(req: operations.GetAnnotationScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationScoreResponse>;
    /**
     * Compare a reference profile vs one profiles
     */
    getSimCompare(req: operations.GetSimCompareRequest, config?: AxiosRequestConfig): Promise<operations.GetSimCompareResponse>;
    /**
     * Search for phenotypically similar diseases or model genes
     */
    getSimSearch(req: operations.GetSimSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSimSearchResponse>;
    /**
     * Get annotation score
     */
    postAnnotationScore(req: shared.SufficiencyPostInput, config?: AxiosRequestConfig): Promise<operations.PostAnnotationScoreResponse>;
    /**
     * Compare a reference profile vs one or more profiles
     */
    postSimCompare(req: shared.CompareInput, config?: AxiosRequestConfig): Promise<operations.PostSimCompareResponse>;
}
