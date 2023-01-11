import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAnnotationScore - Get annotation score
    **/
    getAnnotationScore(req: operations.GetAnnotationScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationScoreResponse>;
    /**
     * getSimCompare - Compare a reference profile vs one profiles
    **/
    getSimCompare(req: operations.GetSimCompareRequest, config?: AxiosRequestConfig): Promise<operations.GetSimCompareResponse>;
    /**
     * getSimSearch - Search for phenotypically similar diseases or model genes
    **/
    getSimSearch(req: operations.GetSimSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSimSearchResponse>;
    /**
     * postAnnotationScore - Get annotation score
    **/
    postAnnotationScore(req: operations.PostAnnotationScoreRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnotationScoreResponse>;
    /**
     * postSimCompare - Compare a reference profile vs one or more profiles
    **/
    postSimCompare(req: operations.PostSimCompareRequest, config?: AxiosRequestConfig): Promise<operations.PostSimCompareResponse>;
}
