import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DnsChangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsChangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsChangesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsChangesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DnsChangesListSecurity extends SpeakeasyBase {
    option1?: DnsChangesListSecurityOption1;
    option2?: DnsChangesListSecurityOption2;
    option3?: DnsChangesListSecurityOption3;
    option4?: DnsChangesListSecurityOption4;
}
/**
 * Sorting criterion. The only supported value is change sequence.
 */
export declare enum DnsChangesListSortByEnum {
    ChangeSequence = "changeSequence"
}
export declare class DnsChangesListRequest extends SpeakeasyBase {
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
     * Identifies the managed zone addressed by this request. Can be the managed zone name or ID.
     */
    managedZone: string;
    /**
     * Optional. Maximum number of results to be returned. If unspecified, the server decides how many results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     */
    pageToken?: string;
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
     * Sorting criterion. The only supported value is change sequence.
     */
    sortBy?: DnsChangesListSortByEnum;
    /**
     * Sorting order direction: 'ascending' or 'descending'.
     */
    sortOrder?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DnsChangesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    changesListResponse?: shared.ChangesListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
