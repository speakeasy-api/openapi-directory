import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
     */
    nameType(req: operations.NameTypeRequest, security: operations.NameTypeSecurity, config?: AxiosRequestConfig): Promise<operations.NameTypeResponse>;
    /**
     * Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
     */
    nameTypeBatch(req: shared.BatchNameIn, security: operations.NameTypeBatchSecurity, config?: AxiosRequestConfig): Promise<operations.NameTypeBatchResponse>;
    /**
     * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
     */
    nameTypeGeo(req: operations.NameTypeGeoRequest, security: operations.NameTypeGeoSecurity, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoResponse>;
    /**
     * Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
     */
    nameTypeGeoBatch(req: shared.BatchNameGeoIn, security: operations.NameTypeGeoBatchSecurity, config?: AxiosRequestConfig): Promise<operations.NameTypeGeoBatchResponse>;
}
