import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Qtl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMappedQtlByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    getMappedQtlByPositionUsingGet(req: operations.GetMappedQtlByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedQtlByPositionUsingGetResponse>;
    /**
     * getQtlByRgdIdUsingGet - Return a QTL for provided RGD ID
    **/
    getQtlByRgdIdUsingGet(req: operations.GetQtlByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlByRgdIdUsingGetResponse>;
    /**
     * getQtlListByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    getQtlListByPositionUsingGet(req: operations.GetQtlListByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlListByPositionUsingGetResponse>;
}
