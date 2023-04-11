import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Hlr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Vérifier la validité d'un numéro
     *
     * @remarks
     * Réalise un lookup HLR sur les numéros
     *
     */
    getHlr(req: shared.HLRrequest, config?: AxiosRequestConfig): Promise<operations.GetHlrResponse>;
}
