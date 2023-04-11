import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest extends SpeakeasyBase {
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
     * The maximum number of items to return per page.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name with location (project name could be the wildcard '-'), e.g.: `projects/-/locations/US`.
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
     */
    query?: string;
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
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    searchAllAssignmentsResponse?: shared.SearchAllAssignmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
