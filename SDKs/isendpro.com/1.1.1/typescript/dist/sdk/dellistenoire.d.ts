import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DelListeNoire {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * delListeNoire - Ajoute un numero en liste noire
     *
     * Supprime un numero en liste noire
    **/
    delListeNoire(req: operations.DelListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.DelListeNoireResponse>;
}
