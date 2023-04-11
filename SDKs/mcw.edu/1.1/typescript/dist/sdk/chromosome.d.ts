import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Chromosome {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of chromosomes
     */
    getChromosomeByAssemblyUsingGET(req: operations.GETChromosomeByAssemblyUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETChromosomeByAssemblyUsingGETResponse>;
    /**
     * Return a list of chromosomes
     */
    getChromosomesByAssemblyUsingGET(req: operations.GETChromosomesByAssemblyUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETChromosomesByAssemblyUsingGETResponse>;
}
