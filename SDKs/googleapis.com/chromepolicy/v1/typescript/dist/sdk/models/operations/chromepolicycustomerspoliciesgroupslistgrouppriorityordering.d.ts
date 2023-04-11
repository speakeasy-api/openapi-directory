import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption1;
    option2?: ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurityOption2;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleChromePolicyVersionsV1ListGroupPriorityOrderingRequest?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
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
     * Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     */
    customer: string;
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleChromePolicyVersionsV1ListGroupPriorityOrderingResponse?: shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
