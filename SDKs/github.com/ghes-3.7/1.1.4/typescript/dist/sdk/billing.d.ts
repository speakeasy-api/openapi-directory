import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Monitor charges and usage from Actions and Packages.
 */
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get GitHub Advanced Security active committers for an enterprise
     *
     * @remarks
     * Gets the GitHub Advanced Security active committers for an enterprise per repository.
     *
     * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.
     *
     * The total number of repositories with committer information is tracked by the `total_count` field.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise} - API method documentation
     */
    billingGetGithubAdvancedSecurityBillingGhe(req: operations.BillingGetGithubAdvancedSecurityBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubAdvancedSecurityBillingGheResponse>;
    /**
     * Get GitHub Advanced Security active committers for an organization
     *
     * @remarks
     * Gets the GitHub Advanced Security active committers for an organization per repository.
     *
     * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.
     *
     * If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.
     *
     * The total number of repositories with committer information is tracked by the `total_count` field.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization} - API method documentation
     */
    billingGetGithubAdvancedSecurityBillingOrg(req: operations.BillingGetGithubAdvancedSecurityBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubAdvancedSecurityBillingOrgResponse>;
}
