import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Registrierkasse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDep - Generates a DEP file.
    **/
    getDep(req: operations.GetDepRequest, config?: AxiosRequestConfig): Promise<operations.GetDepResponse>;
    /**
     * getRegistrierkasse - Returns information about a particular `Registrierkasse`.
    **/
    getRegistrierkasse(req: operations.GetRegistrierkasseRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistrierkasseResponse>;
}
