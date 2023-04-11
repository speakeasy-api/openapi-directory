import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Institutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all available institutions
     */
    retrieveAllSupportedInstitutionsInAGivenCountry(req: operations.RetrieveAllSupportedInstitutionsInAGivenCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAllSupportedInstitutionsInAGivenCountryResponse>;
    /**
     * Get details about a specific Institution
     */
    retrieveInstitution(req: operations.RetrieveInstitutionRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveInstitutionResponse>;
}
