import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ResponsePolicyRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new Response Policy Rule.
     */
    dnsResponsePolicyRulesCreate(req: operations.DnsResponsePolicyRulesCreateRequest, security: operations.DnsResponsePolicyRulesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesCreateResponse>;
    /**
     * Deletes a previously created Response Policy Rule.
     */
    dnsResponsePolicyRulesDelete(req: operations.DnsResponsePolicyRulesDeleteRequest, security: operations.DnsResponsePolicyRulesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesDeleteResponse>;
    /**
     * Fetches the representation of an existing Response Policy Rule.
     */
    dnsResponsePolicyRulesGet(req: operations.DnsResponsePolicyRulesGetRequest, security: operations.DnsResponsePolicyRulesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesGetResponse>;
    /**
     * Enumerates all Response Policy Rules associated with a project.
     */
    dnsResponsePolicyRulesList(req: operations.DnsResponsePolicyRulesListRequest, security: operations.DnsResponsePolicyRulesListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesListResponse>;
    /**
     * Applies a partial update to an existing Response Policy Rule.
     */
    dnsResponsePolicyRulesPatch(req: operations.DnsResponsePolicyRulesPatchRequest, security: operations.DnsResponsePolicyRulesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesPatchResponse>;
    /**
     * Updates an existing Response Policy Rule.
     */
    dnsResponsePolicyRulesUpdate(req: operations.DnsResponsePolicyRulesUpdateRequest, security: operations.DnsResponsePolicyRulesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesUpdateResponse>;
}
