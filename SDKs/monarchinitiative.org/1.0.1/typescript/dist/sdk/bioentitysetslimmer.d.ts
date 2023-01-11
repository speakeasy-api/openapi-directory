import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BioentitysetSlimmer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEntitySetAnatomySlimmer - For a given gene(s), summarize its annotations over a defined set of slim
    **/
    getEntitySetAnatomySlimmer(req: operations.GetEntitySetAnatomySlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetAnatomySlimmerResponse>;
    /**
     * getEntitySetFunctionSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
    **/
    getEntitySetFunctionSlimmer(req: operations.GetEntitySetFunctionSlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetFunctionSlimmerResponse>;
    /**
     * getEntitySetPhenotypeSlimmer - For a given gene(s), summarize its annotations over a defined set of slim
    **/
    getEntitySetPhenotypeSlimmer(req: operations.GetEntitySetPhenotypeSlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetPhenotypeSlimmerResponse>;
}
