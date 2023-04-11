import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * mapping and resolution of identifiers
 */
export declare class IdentifierMapper {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * TODO maps a list of identifiers from a source to a target
     */
    getIdentifierMapper(req: operations.GetIdentifierMapperRequest, config?: AxiosRequestConfig): Promise<operations.GetIdentifierMapperResponse>;
}
