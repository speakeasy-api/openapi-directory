import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search cases using the specified query.
     */
    cloudsupportCasesSearch(req: operations.CloudsupportCasesSearchRequest, security: operations.CloudsupportCasesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportCasesSearchResponse>;
}
