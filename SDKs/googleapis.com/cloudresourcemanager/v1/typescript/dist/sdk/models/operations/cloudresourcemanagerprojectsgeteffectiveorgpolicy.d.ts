import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption1;
    option2?: CloudresourcemanagerProjectsGetEffectiveOrgPolicySecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    getEffectiveOrgPolicyRequest?: shared.GetEffectiveOrgPolicyRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The name of the resource to start computing the effective `Policy`.
     */
    resource: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerProjectsGetEffectiveOrgPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    orgPolicy?: shared.OrgPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
