import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveRequest extends SpeakeasyBase {
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
     * Required. BeyondCorp Connector name of the connector associated with those AppConnections using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}`
     */
    appConnectorId?: string;
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
     * Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ResolveAppConnectionsResponse, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`
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
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse?: shared.GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
