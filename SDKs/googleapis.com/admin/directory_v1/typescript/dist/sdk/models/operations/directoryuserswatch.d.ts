import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryUsersWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersWatchSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersWatchSecurityOption1;
    option2?: DirectoryUsersWatchSecurityOption2;
    option3?: DirectoryUsersWatchSecurityOption3;
}
/**
 * Events to watch for.
 */
export declare enum DirectoryUsersWatchEventEnum {
    Add = "add",
    Delete = "delete",
    MakeAdmin = "makeAdmin",
    Undelete = "undelete",
    Update = "update"
}
/**
 * Column to use for sorting results
 */
export declare enum DirectoryUsersWatchOrderByEnum {
    Email = "email",
    FamilyName = "familyName",
    GivenName = "givenName"
}
/**
 * What subset of fields to fetch for this user.
 */
export declare enum DirectoryUsersWatchProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}
/**
 * Whether to return results in ascending or descending order.
 */
export declare enum DirectoryUsersWatchSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
 */
export declare enum DirectoryUsersWatchViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}
export declare class DirectoryUsersWatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    channel?: shared.Channel;
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
     * Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     */
    customFieldMask?: string;
    /**
     * Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     */
    customer?: string;
    /**
     * Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."
     */
    domain?: string;
    /**
     * Events to watch for.
     */
    event?: DirectoryUsersWatchEventEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
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
     * Column to use for sorting results
     */
    orderBy?: DirectoryUsersWatchOrderByEnum;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * What subset of fields to fetch for this user.
     */
    projection?: DirectoryUsersWatchProjectionEnum;
    /**
     * Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set to true, retrieves the list of deleted users. (Default: false)
     */
    showDeleted?: string;
    /**
     * Whether to return results in ascending or descending order.
     */
    sortOrder?: DirectoryUsersWatchSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
     */
    viewType?: DirectoryUsersWatchViewTypeEnum;
}
export declare class DirectoryUsersWatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
