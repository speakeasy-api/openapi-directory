import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1;
    option2?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2;
    option3?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest extends SpeakeasyBase {
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
     * The default page size is 200 (max 1000).
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
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
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    searchTransitiveMembershipsResponse?: shared.SearchTransitiveMembershipsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
