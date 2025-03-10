import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingTargetingTemplatesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingTargetingTemplatesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingTargetingTemplatesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingTargetingTemplatesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Select only targeting templates with this advertiser ID.
     */
    advertiserId?: string;
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
     * Select only targeting templates with these IDs.
     */
    ids?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingTargetingTemplatesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingTargetingTemplatesListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingTargetingTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    targetingTemplatesListResponse?: shared.TargetingTemplatesListResponse;
}
