import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption2;
    option3?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption3;
    option4?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption4;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListRequest extends SpeakeasyBase {
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
     * The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The parent project for which to list database instances, in the form: `projects/{project-number}/locations/{location-id}` To list across all locations, use a parent in the form: `projects/{project-number}/locations/-`
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
     * Indicate that DatabaseInstances in the `DELETED` state should also be returned.
     */
    showDeleted?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDatabaseInstancesResponse?: shared.ListDatabaseInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
