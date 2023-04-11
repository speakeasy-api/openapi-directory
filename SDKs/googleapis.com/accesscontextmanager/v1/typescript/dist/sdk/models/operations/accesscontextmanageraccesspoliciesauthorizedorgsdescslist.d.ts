import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Number of Authorized Orgs Descs to include in the list. Default 100.
     */
    pageSize?: number;
    /**
     * Next page token for the next batch of Authorized Orgs Desc instances. Defaults to the first page of results.
     */
    pageToken?: string;
    /**
     * Required. Resource name for the access policy to list Authorized Orgs Desc from. Format: `accessPolicies/{policy_id}`
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
export declare class AccesscontextmanagerAccessPoliciesAuthorizedOrgsDescsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAuthorizedOrgsDescsResponse?: shared.ListAuthorizedOrgsDescsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
