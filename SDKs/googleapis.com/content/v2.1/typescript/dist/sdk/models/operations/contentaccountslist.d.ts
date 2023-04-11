import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentAccountsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
 */
export declare enum ContentAccountsListViewEnum {
    Merchant = "MERCHANT",
    Css = "CSS"
}
export declare class ContentAccountsListRequest extends SpeakeasyBase {
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
     * If view is set to "css", only return accounts that are assigned label with given ID.
     */
    label?: string;
    /**
     * The maximum number of accounts to return in the response, used for paging.
     */
    maxResults?: number;
    /**
     * The ID of the managing account. This must be a multi-client account.
     */
    merchantId: string;
    /**
     * If set, only the accounts with the given name (case sensitive) will be returned.
     */
    name?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
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
    /**
     * Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
     */
    view?: ContentAccountsListViewEnum;
}
export declare class ContentAccountsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    accountsListResponse?: shared.AccountsListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
