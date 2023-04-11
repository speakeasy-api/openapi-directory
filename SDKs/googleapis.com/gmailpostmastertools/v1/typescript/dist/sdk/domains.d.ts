import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
     */
    gmailpostmastertoolsDomainsList(req: operations.GmailpostmastertoolsDomainsListRequest, security: operations.GmailpostmastertoolsDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsListResponse>;
    /**
     * Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     */
    gmailpostmastertoolsDomainsTrafficStatsGet(req: operations.GmailpostmastertoolsDomainsTrafficStatsGetRequest, security: operations.GmailpostmastertoolsDomainsTrafficStatsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsTrafficStatsGetResponse>;
    /**
     * List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     */
    gmailpostmastertoolsDomainsTrafficStatsList(req: operations.GmailpostmastertoolsDomainsTrafficStatsListRequest, security: operations.GmailpostmastertoolsDomainsTrafficStatsListSecurity, config?: AxiosRequestConfig): Promise<operations.GmailpostmastertoolsDomainsTrafficStatsListResponse>;
}
