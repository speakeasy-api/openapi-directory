import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EventarcProjectsLocationsChannelConnectionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class EventarcProjectsLocationsChannelConnectionsListRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of channel connections to return on each page. Note: The service may send fewer responses.
     */
    pageSize?: number;
    /**
     * The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent collection from which to list channel connections.
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
export declare class EventarcProjectsLocationsChannelConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listChannelConnectionsResponse?: shared.ListChannelConnectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
