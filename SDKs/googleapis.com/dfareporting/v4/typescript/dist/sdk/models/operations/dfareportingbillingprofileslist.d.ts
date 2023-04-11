import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingBillingProfilesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingBillingProfilesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingBillingProfilesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingBillingProfilesListStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class DfareportingBillingProfilesListRequest extends SpeakeasyBase {
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
     * Select only billing profile with currency.
     */
    currencyCode?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only billing profile with these IDs.
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
     * Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile".
     */
    name?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API.
     */
    onlySuggestion?: boolean;
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
     * Field by which to sort the list.
     */
    sortField?: DfareportingBillingProfilesListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingBillingProfilesListSortOrderEnum;
    /**
     * Select only billing profile with the specified status.
     */
    status?: DfareportingBillingProfilesListStatusEnum[];
    /**
     * Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported.
     */
    subaccountIds?: string[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingBillingProfilesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    billingProfilesListResponse?: shared.BillingProfilesListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
