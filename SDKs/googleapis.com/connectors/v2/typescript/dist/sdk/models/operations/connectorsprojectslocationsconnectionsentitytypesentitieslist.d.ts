import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest extends SpeakeasyBase {
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
     * Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
     */
    conditions?: string;
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
     * Number of entity rows to return. Defaults page size = 25. Max page size = 200.
     */
    pageSize?: number;
    /**
     * Page token value if available from a previous request.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
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
     * List of 'sort_by' columns to use when returning the results.
     */
    sortBy?: string[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listEntitiesResponse?: shared.ListEntitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
