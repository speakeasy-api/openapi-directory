import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Map {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getChromosomeByAssemblyUsingGet - Return a list of chromosomes
    **/
    getChromosomeByAssemblyUsingGet(req: operations.GetChromosomeByAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChromosomeByAssemblyUsingGetResponse>;
    /**
     * getChromosomesByAssemblyUsingGet - Return a list of chromosomes
    **/
    getChromosomesByAssemblyUsingGet(req: operations.GetChromosomesByAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChromosomesByAssemblyUsingGetResponse>;
    /**
     * getMapsBySpeciesUsingGet - Return a list of assemblies
    **/
    getMapsBySpeciesUsingGet(req: operations.GetMapsBySpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMapsBySpeciesUsingGetResponse>;
}
