import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudresourcemanagerEffectiveTagsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudresourcemanagerEffectiveTagsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudresourcemanagerEffectiveTagsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerEffectiveTagsListSecurityOption1;
    option2?: CloudresourcemanagerEffectiveTagsListSecurityOption2;
}
export declare class CloudresourcemanagerEffectiveTagsListRequest extends SpeakeasyBase {
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
     * Optional. The maximum number of effective tags to return in the response. The server allows a maximum of 300 effective tags to return in a single page. If unspecified, the server will use 100 as the default.
     */
    pageSize?: number;
    /**
     * Optional. A pagination token returned from a previous call to `ListEffectiveTags` that indicates from where this listing should continue.
     */
    pageToken?: string;
    /**
     * Required. The full resource name of a resource for which you want to list the effective tags. E.g. "//cloudresourcemanager.googleapis.com/projects/123"
     */
    parent?: string;
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
export declare class CloudresourcemanagerEffectiveTagsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listEffectiveTagsResponse?: shared.ListEffectiveTagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
