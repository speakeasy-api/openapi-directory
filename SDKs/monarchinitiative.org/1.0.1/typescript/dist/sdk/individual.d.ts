import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Individual {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIndividual - Returns list of matches
    **/
    getIndividual(req: operations.GetIndividualRequest, config?: AxiosRequestConfig): Promise<operations.GetIndividualResponse>;
    /**
     * getPedigree - Returns list of matches
    **/
    getPedigree(req: operations.GetPedigreeRequest, config?: AxiosRequestConfig): Promise<operations.GetPedigreeResponse>;
}
