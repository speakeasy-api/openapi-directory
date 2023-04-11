import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RatStrain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all active strains in RGD
     */
    getAllStrainsUsingGET(config?: AxiosRequestConfig): Promise<operations.GETAllStrainsUsingGETResponse>;
    /**
     * Return a strain by RGD ID
     */
    getStrainByRgdIdUsingGET(req: operations.GETStrainByRgdIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETStrainByRgdIdUsingGETResponse>;
    /**
     * Return all active strains by position
     */
    getStrainsByPositionUsingGET(req: operations.GETStrainsByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETStrainsByPositionUsingGETResponse>;
}
