import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Card {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiCard - Get Card
    **/
    getApiCard(req: operations.GetApiCardRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardResponse>;
    /**
     * getApiCardTypes - Get available card types
    **/
    getApiCardTypes(req: operations.GetApiCardTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardTypesResponse>;
}
