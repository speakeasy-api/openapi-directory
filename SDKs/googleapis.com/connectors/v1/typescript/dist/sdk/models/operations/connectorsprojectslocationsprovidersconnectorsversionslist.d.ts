import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
 */
export declare enum ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum {
    ConnectorVersionViewUnspecified = "CONNECTOR_VERSION_VIEW_UNSPECIFIED",
    ConnectorVersionViewBasic = "CONNECTOR_VERSION_VIEW_BASIC",
    ConnectorVersionViewFull = "CONNECTOR_VERSION_VIEW_FULL"
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest extends SpeakeasyBase {
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
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the connectors, of the form: `projects/* /locations/* /providers/* /connectors/*` Only global location is supported for ConnectorVersion resource.
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
     * Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
     */
    view?: ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum;
}
export declare class ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listConnectorVersionsResponse?: shared.ListConnectorVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
