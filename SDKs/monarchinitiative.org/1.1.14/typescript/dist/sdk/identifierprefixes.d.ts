import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * identifier prefixes
 */
export declare class IdentifierPrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of prefixes
     */
    getPrefixCollection(config?: AxiosRequestConfig): Promise<operations.GetPrefixCollectionResponse>;
    /**
     * Returns contracted URI
     */
    getPrefixContract(req: operations.GetPrefixContractRequest, config?: AxiosRequestConfig): Promise<operations.GetPrefixContractResponse>;
    /**
     * Returns expanded URI
     */
    getPrefixExpand(req: operations.GetPrefixExpandRequest, config?: AxiosRequestConfig): Promise<operations.GetPrefixExpandResponse>;
}
