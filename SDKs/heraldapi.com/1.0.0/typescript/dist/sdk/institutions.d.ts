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
     * /institutions
     *
     * @remarks
     * ### Get institutions
     *
     * Get a list of available institutions.
     */
    getInstitutions(config?: AxiosRequestConfig): Promise<operations.GetInstitutionsResponse>;
}
