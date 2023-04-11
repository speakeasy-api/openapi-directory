import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DelListeNoire {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Ajoute un numero en liste noire
     *
     * @remarks
     * Supprime un numero en liste noire
     */
    delListeNoire(req: operations.DelListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.DelListeNoireResponse>;
}
