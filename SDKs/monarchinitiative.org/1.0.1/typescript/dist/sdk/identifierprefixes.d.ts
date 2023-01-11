import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IdentifierPrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPrefixCollection - Returns list of prefixes
    **/
    getPrefixCollection(config?: AxiosRequestConfig): Promise<operations.GetPrefixCollectionResponse>;
    /**
     * getPrefixContract - Returns contracted URI
    **/
    getPrefixContract(req: operations.GetPrefixContractRequest, config?: AxiosRequestConfig): Promise<operations.GetPrefixContractResponse>;
    /**
     * getPrefixExpand - Returns expanded URI
    **/
    getPrefixExpand(req: operations.GetPrefixExpandRequest, config?: AxiosRequestConfig): Promise<operations.GetPrefixExpandResponse>;
}
