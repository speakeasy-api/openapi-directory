import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
     */
    recaptchaenterpriseProjectsAssessmentsAnnotate(req: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest, security: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse>;
    /**
     * Creates an Assessment of the likelihood an event is legitimate.
     */
    recaptchaenterpriseProjectsAssessmentsCreate(req: operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest, security: operations.RecaptchaenterpriseProjectsAssessmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse>;
    /**
     * Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
     */
    recaptchaenterpriseProjectsFirewallpoliciesCreate(req: operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateRequest, security: operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsFirewallpoliciesCreateResponse>;
    /**
     * Returns the list of all firewall policies that belong to a project.
     */
    recaptchaenterpriseProjectsFirewallpoliciesList(req: operations.RecaptchaenterpriseProjectsFirewallpoliciesListRequest, security: operations.RecaptchaenterpriseProjectsFirewallpoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsFirewallpoliciesListResponse>;
    /**
     * Creates a new reCAPTCHA Enterprise key.
     */
    recaptchaenterpriseProjectsKeysCreate(req: operations.RecaptchaenterpriseProjectsKeysCreateRequest, security: operations.RecaptchaenterpriseProjectsKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysCreateResponse>;
    /**
     * Deletes the specified key.
     */
    recaptchaenterpriseProjectsKeysDelete(req: operations.RecaptchaenterpriseProjectsKeysDeleteRequest, security: operations.RecaptchaenterpriseProjectsKeysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysDeleteResponse>;
    /**
     * Get some aggregated metrics for a Key. This data can be used to build dashboards.
     */
    recaptchaenterpriseProjectsKeysGetMetrics(req: operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest, security: operations.RecaptchaenterpriseProjectsKeysGetMetricsSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse>;
    /**
     * Returns the list of all keys that belong to a project.
     */
    recaptchaenterpriseProjectsKeysList(req: operations.RecaptchaenterpriseProjectsKeysListRequest, security: operations.RecaptchaenterpriseProjectsKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysListResponse>;
    /**
     * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
     */
    recaptchaenterpriseProjectsKeysMigrate(req: operations.RecaptchaenterpriseProjectsKeysMigrateRequest, security: operations.RecaptchaenterpriseProjectsKeysMigrateSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysMigrateResponse>;
    /**
     * Updates the specified key.
     */
    recaptchaenterpriseProjectsKeysPatch(req: operations.RecaptchaenterpriseProjectsKeysPatchRequest, security: operations.RecaptchaenterpriseProjectsKeysPatchSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysPatchResponse>;
    /**
     * Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
     */
    recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(req: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest, security: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse>;
    /**
     * Search group memberships related to a given account.
     */
    recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest, security: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse>;
    /**
     * List groups of related accounts.
     */
    recaptchaenterpriseProjectsRelatedaccountgroupsList(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest, security: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse>;
    /**
     * Get memberships in a group of related accounts.
     */
    recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(req: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest, security: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity, config?: AxiosRequestConfig): Promise<operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse>;
}
