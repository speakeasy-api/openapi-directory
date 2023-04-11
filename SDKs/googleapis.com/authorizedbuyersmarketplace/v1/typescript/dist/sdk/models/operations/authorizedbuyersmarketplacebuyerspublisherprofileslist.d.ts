import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest extends SpeakeasyBase {
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
     * Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) syntax.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     */
    pageSize?: number;
    /**
     * The page token as returned from a previous ListPublisherProfilesResponse.
     */
    pageToken?: string;
    /**
     * Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}`
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
export declare class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listPublisherProfilesResponse?: shared.ListPublisherProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
