import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsProjectsLocationsConnectionsActionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ConnectorsProjectsLocationsConnectionsActionsListRequest extends SpeakeasyBase {
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
     * Number of Actions to return. Defaults to 25.
     */
    pageSize?: number;
    /**
     * Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}
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
export declare class ConnectorsProjectsLocationsConnectionsActionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listActionsResponse?: shared.ListActionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
