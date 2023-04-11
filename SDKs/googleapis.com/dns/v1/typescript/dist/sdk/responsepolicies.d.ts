import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ResponsePolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new Response Policy
     */
    dnsResponsePoliciesCreate(req: operations.DnsResponsePoliciesCreateRequest, security: operations.DnsResponsePoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesCreateResponse>;
    /**
     * Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
     */
    dnsResponsePoliciesDelete(req: operations.DnsResponsePoliciesDeleteRequest, security: operations.DnsResponsePoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesDeleteResponse>;
    /**
     * Fetches the representation of an existing Response Policy.
     */
    dnsResponsePoliciesGet(req: operations.DnsResponsePoliciesGetRequest, security: operations.DnsResponsePoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesGetResponse>;
    /**
     * Enumerates all Response Policies associated with a project.
     */
    dnsResponsePoliciesList(req: operations.DnsResponsePoliciesListRequest, security: operations.DnsResponsePoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesListResponse>;
    /**
     * Applies a partial update to an existing Response Policy.
     */
    dnsResponsePoliciesPatch(req: operations.DnsResponsePoliciesPatchRequest, security: operations.DnsResponsePoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesPatchResponse>;
    /**
     * Updates an existing Response Policy.
     */
    dnsResponsePoliciesUpdate(req: operations.DnsResponsePoliciesUpdateRequest, security: operations.DnsResponsePoliciesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesUpdateResponse>;
}
