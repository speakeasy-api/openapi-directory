import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * resources concerning a "Beleg"
 */
export declare class Beleg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Signs a receipt and stores it in the "Datenerfassungsprotokoll".
     */
    addBeleg(req: operations.AddBelegRequest, config?: AxiosRequestConfig): Promise<operations.AddBelegResponse>;
    /**
     * Generates an `Abschlussbeleg`.
     */
    createAbschluss(req: operations.CreateAbschlussRequest, config?: AxiosRequestConfig): Promise<operations.CreateAbschlussResponse>;
    /**
     * Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
     */
    getBeleg(req: operations.GetBelegRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegResponse>;
    /**
     * Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
     */
    getBelege(req: operations.GetBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeResponse>;
    /**
     * Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
     */
    getBelegeBelegUuid(req: operations.GetBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeBelegUuidResponse>;
}
