import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vulnerabilities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVulnerabilityDefinitions - List vulnerability definitions
    **/
    getVulnerabilityDefinitions(req: operations.GetVulnerabilityDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVulnerabilityDefinitionsResponse>;
    /**
     * getVulnerabilityDefinitionsId - Retrieve vulnerability definition
    **/
    getVulnerabilityDefinitionsId(req: operations.GetVulnerabilityDefinitionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVulnerabilityDefinitionsIdResponse>;
}
