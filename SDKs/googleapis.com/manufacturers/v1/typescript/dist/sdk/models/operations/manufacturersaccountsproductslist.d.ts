import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ManufacturersAccountsProductsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum ManufacturersAccountsProductsListIncludeEnum {
    Unknown = "UNKNOWN",
    Attributes = "ATTRIBUTES",
    Issues = "ISSUES",
    DestinationStatuses = "DESTINATION_STATUSES"
}
export declare class ManufacturersAccountsProductsListRequest extends SpeakeasyBase {
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
     * The information to be included in the response. Only sections listed here will be returned.
     */
    include?: ManufacturersAccountsProductsListIncludeEnum[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of product statuses to return in the response, used for paging.
     */
    pageSize?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
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
export declare class ManufacturersAccountsProductsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listProductsResponse?: shared.ListProductsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
