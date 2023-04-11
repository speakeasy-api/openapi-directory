import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Individual humans (including patients), or organisms
 */
export declare class Individual {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of matches
     */
    getIndividual(req: operations.GetIndividualRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualResponse>;
    /**
     * Returns list of matches
     */
    getPedigree(req: operations.GetPedigreeRequest, config?: AxiosRequestConfig): Promise<operations.GetPedigreeResponse>;
}
