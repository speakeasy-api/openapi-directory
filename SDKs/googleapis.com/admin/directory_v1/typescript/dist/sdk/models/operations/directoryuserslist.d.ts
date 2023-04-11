import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryUsersListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersListSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersListSecurityOption1;
    option2?: DirectoryUsersListSecurityOption2;
    option3?: DirectoryUsersListSecurityOption3;
}
/**
 * Event on which subscription is intended (if subscribing)
 */
export declare enum DirectoryUsersListEventEnum {
    Add = "add",
    Delete = "delete",
    MakeAdmin = "makeAdmin",
    Undelete = "undelete",
    Update = "update"
}
/**
 * Property to use for sorting results.
 */
export declare enum DirectoryUsersListOrderByEnum {
    Email = "email",
    FamilyName = "familyName",
    GivenName = "givenName"
}
/**
 * What subset of fields to fetch for this user.
 */
export declare enum DirectoryUsersListProjectionEnum {
    Basic = "basic",
    Custom = "custom",
    Full = "full"
}
/**
 * Whether to return results in ascending or descending order, ignoring case.
 */
export declare enum DirectoryUsersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).
 */
export declare enum DirectoryUsersListViewTypeEnum {
    AdminView = "admin_view",
    DomainPublic = "domain_public"
}
export declare class DirectoryUsersListRequest extends SpeakeasyBase {
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
     * A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.
     */
    customFieldMask?: string;
    /**
     * The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.
     */
    customer?: string;
    /**
     * The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.
     */
    domain?: string;
    /**
     * Event on which subscription is intended (if subscribing)
     */
    event?: DirectoryUsersListEventEnum;
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
     * Property to use for sorting results.
     */
    orderBy?: DirectoryUsersListOrderByEnum;
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
    projection?: DirectoryUsersListProjectionEnum;
    /**
     * Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set to `true`, retrieves the list of deleted users. (Default: `false`)
     */
    showDeleted?: string;
    /**
     * Whether to return results in ascending or descending order, ignoring case.
     */
    sortOrder?: DirectoryUsersListSortOrderEnum;
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
    viewType?: DirectoryUsersListViewTypeEnum;
}
export declare class DirectoryUsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    users?: shared.Users;
}
