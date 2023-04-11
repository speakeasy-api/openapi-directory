import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * In Probely findings are connected to vulnerability definitions.
 *
 * @remarks
 * This is how we keep track what type of vulnerability it is, it also
 * includes a name and description.
 *
 */
export declare class Vulnerabilities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List vulnerability definitions
     */
    getVulnerabilityDefinitions(req: operations.GetVulnerabilityDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVulnerabilityDefinitionsResponse>;
    /**
     * Retrieve vulnerability definition
     */
    getVulnerabilityDefinitionsId(req: operations.GetVulnerabilityDefinitionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVulnerabilityDefinitionsIdResponse>;
}
