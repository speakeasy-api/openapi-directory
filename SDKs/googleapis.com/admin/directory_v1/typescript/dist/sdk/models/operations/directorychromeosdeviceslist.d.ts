import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryChromeosdevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryChromeosdevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryChromeosdevicesListSecurity extends SpeakeasyBase {
    option1?: DirectoryChromeosdevicesListSecurityOption1;
    option2?: DirectoryChromeosdevicesListSecurityOption2;
}
/**
 * Device property to use for sorting results.
 */
export declare enum DirectoryChromeosdevicesListOrderByEnum {
    AnnotatedLocation = "annotatedLocation",
    AnnotatedUser = "annotatedUser",
    LastSync = "lastSync",
    Notes = "notes",
    SerialNumber = "serialNumber",
    Status = "status"
}
/**
 * Restrict information returned to a set of selected fields.
 */
export declare enum DirectoryChromeosdevicesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
 */
export declare enum DirectoryChromeosdevicesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DirectoryChromeosdevicesListRequest extends SpeakeasyBase {
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
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).
     */
    customerId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.
     */
    includeChildOrgunits?: boolean;
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
     * Device property to use for sorting results.
     */
    orderBy?: DirectoryChromeosdevicesListOrderByEnum;
    /**
     * The full path of the organizational unit (minus the leading `/`) or its unique ID.
     */
    orgUnitPath?: string;
    /**
     * The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: DirectoryChromeosdevicesListProjectionEnum;
    /**
     * Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     */
    sortOrder?: DirectoryChromeosdevicesListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DirectoryChromeosdevicesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    chromeOsDevices?: shared.ChromeOsDevices;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
