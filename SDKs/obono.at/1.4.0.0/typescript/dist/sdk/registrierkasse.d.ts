import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * resources concerning a "Registrierkasse"
 */
export declare class Registrierkasse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates a DEP file.
     */
    getDEP(req: operations.GetDEPRequest, config?: AxiosRequestConfig): Promise<operations.GetDEPResponse>;
    /**
     * Returns information about a particular `Registrierkasse`.
     */
    getRegistrierkasse(req: operations.GetRegistrierkasseRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistrierkasseResponse>;
}
