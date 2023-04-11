import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * maps a set of entities to a slim
 */
export declare class BioentitysetSlimmer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * For a given gene(s), summarize its annotations over a defined set of slim
     */
    getEntitySetAnatomySlimmer(req: operations.GetEntitySetAnatomySlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetAnatomySlimmerResponse>;
    /**
     * For a given gene(s), summarize its annotations over a defined set of slim
     */
    getEntitySetFunctionSlimmer(req: operations.GetEntitySetFunctionSlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetFunctionSlimmerResponse>;
    /**
     * For a given gene(s), summarize its annotations over a defined set of slim
     */
    getEntitySetPhenotypeSlimmer(req: operations.GetEntitySetPhenotypeSlimmerRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitySetPhenotypeSlimmerResponse>;
}
