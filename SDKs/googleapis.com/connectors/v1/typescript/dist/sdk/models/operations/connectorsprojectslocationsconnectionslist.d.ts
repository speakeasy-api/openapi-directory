import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsProjectsLocationsConnectionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
 */
export declare enum ConnectorsProjectsLocationsConnectionsListViewEnum {
    ConnectionViewUnspecified = "CONNECTION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ConnectorsProjectsLocationsConnectionsListRequest extends SpeakeasyBase {
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
     * Filter.
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
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the Connection, of the form: `projects/* /locations/*`
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
    /**
     * Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     */
    view?: ConnectorsProjectsLocationsConnectionsListViewEnum;
}
export declare class ConnectorsProjectsLocationsConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
