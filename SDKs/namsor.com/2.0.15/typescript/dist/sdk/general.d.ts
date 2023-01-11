import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * nameType - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
    **/
    nameType(req: operations.NameTypeRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeResponse>;
    /**
     * nameTypeBatch - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
    **/
    nameTypeBatch(req: operations.NameTypeBatchRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeBatchResponse>;
    /**
     * nameTypeGeo - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
    **/
    nameTypeGeo(req: operations.NameTypeGeoRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoResponse>;
    /**
     * nameTypeGeoBatch - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
    **/
    nameTypeGeoBatch(req: operations.NameTypeGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoBatchResponse>;
}
