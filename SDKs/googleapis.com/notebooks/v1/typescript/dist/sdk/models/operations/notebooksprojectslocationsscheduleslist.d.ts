import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NotebooksProjectsLocationsSchedulesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class NotebooksProjectsLocationsSchedulesListRequest extends SpeakeasyBase {
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
     * Filter applied to resulting schedules.
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
     * Field to order results by.
     */
    orderBy?: string;
    /**
     * Maximum return size of the list call.
     */
    pageSize?: number;
    /**
     * A previous returned page token that can be used to continue listing from the last result.
     */
    pageToken?: string;
    /**
     * Required. Format: `parent=projects/{project_id}/locations/{location}`
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
export declare class NotebooksProjectsLocationsSchedulesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSchedulesResponse?: shared.ListSchedulesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
