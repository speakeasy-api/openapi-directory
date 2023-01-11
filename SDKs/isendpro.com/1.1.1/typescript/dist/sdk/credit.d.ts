import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Credit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCredit - Interrogation credit
     *
     * Retourne le credit existant associe au compte.
     *
    **/
    getCredit(req: operations.GetCreditRequest, config?: AxiosRequestConfig): Promise<operations.GetCreditResponse>;
}
