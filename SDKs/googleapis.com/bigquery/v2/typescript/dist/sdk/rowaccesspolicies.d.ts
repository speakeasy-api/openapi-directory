import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RowAccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all row access policies on the specified table.
     */
    bigqueryRowAccessPoliciesList(req: operations.BigqueryRowAccessPoliciesListRequest, security: operations.BigqueryRowAccessPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryRowAccessPoliciesListResponse>;
}
