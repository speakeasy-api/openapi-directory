import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChromepolicyCustomersPolicySchemasListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromepolicyCustomersPolicySchemasListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromepolicyCustomersPolicySchemasListSecurity extends SpeakeasyBase {
    option1?: ChromepolicyCustomersPolicySchemasListSecurityOption1;
    option2?: ChromepolicyCustomersPolicySchemasListSecurityOption2;
}
export declare class ChromepolicyCustomersPolicySchemasListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
     */
    pageSize?: number;
    /**
     * The page token used to retrieve a specific page of the listing request.
     */
    pageToken?: string;
    /**
     * Required. The customer for which the listing request will apply.
     */
    parent: string;
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
export declare class ChromepolicyCustomersPolicySchemasListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleChromePolicyVersionsV1ListPolicySchemasResponse?: shared.GoogleChromePolicyVersionsV1ListPolicySchemasResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
