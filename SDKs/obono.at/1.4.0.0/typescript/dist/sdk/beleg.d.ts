import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Beleg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addBeleg - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
    **/
    addBeleg(req: operations.AddBelegRequest, config?: AxiosRequestConfig): Promise<operations.AddBelegResponse>;
    /**
     * createAbschluss - Generates an `Abschlussbeleg`.
    **/
    createAbschluss(req: operations.CreateAbschlussRequest, config?: AxiosRequestConfig): Promise<operations.CreateAbschlussResponse>;
    /**
     * getBeleg - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
    **/
    getBeleg(req: operations.GetBelegRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegResponse>;
    /**
     * getBelege - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
    **/
    getBelege(req: operations.GetBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeResponse>;
    /**
     * getBelegeBelegUuid - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
    **/
    getBelegeBelegUuid(req: operations.GetBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeBelegUuidResponse>;
}
