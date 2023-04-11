import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingCreativeFieldValuesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingCreativeFieldValuesListSortFieldEnum {
    Id = "ID",
    Value = "VALUE"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingCreativeFieldValuesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCreativeFieldValuesListRequest extends SpeakeasyBase {
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
     * Creative field ID for this creative field value.
     */
    creativeFieldId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only creative field values with these IDs.
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
     * Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingCreativeFieldValuesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingCreativeFieldValuesListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingCreativeFieldValuesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    creativeFieldValuesListResponse?: shared.CreativeFieldValuesListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
