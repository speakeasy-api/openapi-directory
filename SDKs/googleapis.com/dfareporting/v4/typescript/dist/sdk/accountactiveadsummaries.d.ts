import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountActiveAdSummaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the account's active ad summary by account ID.
     */
    dfareportingAccountActiveAdSummariesGet(req: operations.DfareportingAccountActiveAdSummariesGetRequest, security: operations.DfareportingAccountActiveAdSummariesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountActiveAdSummariesGetResponse>;
}
