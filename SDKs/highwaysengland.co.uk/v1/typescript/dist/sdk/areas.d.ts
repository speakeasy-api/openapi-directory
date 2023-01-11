import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Areas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * areasGet - Returns list of areas
    **/
    areasGet(req: operations.AreasGetRequest, config?: AxiosRequestConfig): Promise<operations.AreasGetResponse>;
    /**
     * getVVersionAreasAreaIds - Returns details of selected area
    **/
    getVVersionAreasAreaIds(req: operations.GetVVersionAreasAreaIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionAreasAreaIdsResponse>;
}
