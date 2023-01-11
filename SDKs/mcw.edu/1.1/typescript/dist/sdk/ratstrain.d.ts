import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RatStrain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllStrainsUsingGet - Return all active strains in RGD
    **/
    getAllStrainsUsingGet(config?: AxiosRequestConfig): Promise<operations.GetAllStrainsUsingGetResponse>;
    /**
     * getStrainByRgdIdUsingGet - Return a strain by RGD ID
    **/
    getStrainByRgdIdUsingGet(req: operations.GetStrainByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainByRgdIdUsingGetResponse>;
    /**
     * getStrainsByPositionUsingGet - Return all active strains by position
    **/
    getStrainsByPositionUsingGet(req: operations.GetStrainsByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainsByPositionUsingGetResponse>;
}
