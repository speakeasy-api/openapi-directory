import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comptage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Compter le nombre de caractère
     *
     * @remarks
     * Compte le nombre de SMS necessaire à un envoi
     */
    comptage(req: shared.ComptageRequest, config?: AxiosRequestConfig): Promise<operations.ComptageResponse>;
}
