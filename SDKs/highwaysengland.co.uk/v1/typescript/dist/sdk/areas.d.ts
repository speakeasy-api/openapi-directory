import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Areas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of areas
     */
    areasGet(req: operations.AreasGetRequest, config?: AxiosRequestConfig): Promise<operations.AreasGetResponse>;
    /**
     * Returns details of selected area
     */
    getVVersionAreasAreaIds(req: operations.GetVVersionAreasAreaIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionAreasAreaIdsResponse>;
}
