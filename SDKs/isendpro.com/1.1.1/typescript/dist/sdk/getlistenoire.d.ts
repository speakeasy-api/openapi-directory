import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GetListeNoire {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retourne le liste noire
     *
     * @remarks
     * Retourne un fichier csv zippé contenant la liste noire
     */
    getListeNoire(req: operations.GetListeNoireRequest, config?: AxiosRequestConfig): Promise<operations.GetListeNoireResponse>;
}
