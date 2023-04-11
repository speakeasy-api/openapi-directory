import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Persona {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Personas
     */
    getPersonas(req: operations.GetPersonasRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonasResponse>;
    /**
     * Get Persona by id
     */
    getPersonasId(req: operations.GetPersonasIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonasIdResponse>;
}
