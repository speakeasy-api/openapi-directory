import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Qtl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list QTL for given position and assembly map
     */
    getMappedQTLByPositionUsingGET(req: operations.GETMappedQTLByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETMappedQTLByPositionUsingGETResponse>;
    /**
     * Return a QTL for provided RGD ID
     */
    getQTLByRgdIdUsingGET(req: operations.GETQTLByRgdIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETQTLByRgdIdUsingGETResponse>;
    /**
     * Returns a list QTL for given position and assembly map
     */
    getQtlListByPositionUsingGET(req: operations.GETQtlListByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETQtlListByPositionUsingGETResponse>;
}
