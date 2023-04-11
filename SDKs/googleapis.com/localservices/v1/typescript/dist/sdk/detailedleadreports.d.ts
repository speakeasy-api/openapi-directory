import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DetailedLeadReports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.
     */
    localservicesDetailedLeadReportsSearch(req: operations.LocalservicesDetailedLeadReportsSearchRequest, security: operations.LocalservicesDetailedLeadReportsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.LocalservicesDetailedLeadReportsSearchResponse>;
}
