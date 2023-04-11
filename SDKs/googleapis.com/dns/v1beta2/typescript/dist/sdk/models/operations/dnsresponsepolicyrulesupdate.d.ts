import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DnsResponsePolicyRulesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsResponsePolicyRulesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsResponsePolicyRulesUpdateSecurity extends SpeakeasyBase {
    option1?: DnsResponsePolicyRulesUpdateSecurityOption1;
    option2?: DnsResponsePolicyRulesUpdateSecurityOption2;
}
export declare class DnsResponsePolicyRulesUpdateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    responsePolicyRule1?: shared.ResponsePolicyRule;
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
     * For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     */
    clientOperationId?: string;
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
     * Identifies the project addressed by this request.
     */
    project: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * User assigned name of the Response Policy containing the Response Policy Rule.
     */
    responsePolicy: string;
    /**
     * User assigned name of the Response Policy Rule addressed by this request.
     */
    responsePolicyRulePathParameter: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DnsResponsePolicyRulesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    responsePolicyRulesUpdateResponse?: shared.ResponsePolicyRulesUpdateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
