import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryTablesSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryTablesSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryTablesSetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigqueryTablesSetIamPolicySecurityOption1;
    option2?: BigqueryTablesSetIamPolicySecurityOption2;
}
export declare class BigqueryTablesSetIamPolicyRequest extends SpeakeasyBase {
    setIamPolicyRequest?: shared.SetIamPolicyRequest;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryTablesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    policy?: shared.Policy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
