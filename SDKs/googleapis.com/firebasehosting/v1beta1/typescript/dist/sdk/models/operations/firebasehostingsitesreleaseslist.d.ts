import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebasehostingSitesReleasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesReleasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesReleasesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesReleasesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesReleasesListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesReleasesListSecurityOption1;
    option2?: FirebasehostingSitesReleasesListSecurityOption2;
    option3?: FirebasehostingSitesReleasesListSecurityOption3;
    option4?: FirebasehostingSitesReleasesListSecurityOption4;
}
export declare class FirebasehostingSitesReleasesListRequest extends SpeakeasyBase {
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
     * The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
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
export declare class FirebasehostingSitesReleasesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listReleasesResponse?: shared.ListReleasesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
