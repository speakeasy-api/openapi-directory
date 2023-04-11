import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebasehostingSitesVersionsFilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesVersionsFilesListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsFilesListSecurityOption1;
    option2?: FirebasehostingSitesVersionsFilesListSecurityOption2;
    option3?: FirebasehostingSitesVersionsFilesListSecurityOption3;
    option4?: FirebasehostingSitesVersionsFilesListSecurityOption4;
}
/**
 *  The type of files that should be listed for the specified version.
 */
export declare enum FirebasehostingSitesVersionsFilesListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Expected = "EXPECTED",
    Active = "ACTIVE"
}
export declare class FirebasehostingSitesVersionsFilesListRequest extends SpeakeasyBase {
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
     * The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
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
     *  The type of files that should be listed for the specified version.
     */
    status?: FirebasehostingSitesVersionsFilesListStatusEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesVersionsFilesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listVersionFilesResponse?: shared.ListVersionFilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
