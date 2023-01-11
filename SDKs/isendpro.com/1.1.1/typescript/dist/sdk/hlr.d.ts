import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Hlr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHlr - Vérifier la validité d'un numéro
     *
     * Réalise un lookup HLR sur les numéros
     *
    **/
    getHlr(req: operations.GetHlrRequest, config?: AxiosRequestConfig): Promise<operations.GetHlrResponse>;
}
