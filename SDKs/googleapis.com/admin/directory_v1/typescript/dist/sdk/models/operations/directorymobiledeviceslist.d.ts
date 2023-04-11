import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryMobiledevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryMobiledevicesListSecurity extends SpeakeasyBase {
    option1?: DirectoryMobiledevicesListSecurityOption1;
    option2?: DirectoryMobiledevicesListSecurityOption2;
    option3?: DirectoryMobiledevicesListSecurityOption3;
}
/**
 * Device property to use for sorting results.
 */
export declare enum DirectoryMobiledevicesListOrderByEnum {
    DeviceId = "deviceId",
    Email = "email",
    LastSync = "lastSync",
    Model = "model",
    Name = "name",
    Os = "os",
    Status = "status",
    Type = "type"
}
/**
 * Restrict information returned to a set of selected fields.
 */
export declare enum DirectoryMobiledevicesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
 */
export declare enum DirectoryMobiledevicesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DirectoryMobiledevicesListRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return. Max allowed value is 100.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Device property to use for sorting results.
     */
    orderBy?: DirectoryMobiledevicesListOrderByEnum;
    /**
     * Token to specify next page in the list
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: DirectoryMobiledevicesListProjectionEnum;
    /**
     * Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.
     */
    sortOrder?: DirectoryMobiledevicesListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DirectoryMobiledevicesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    mobileDevices?: shared.MobileDevices;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
