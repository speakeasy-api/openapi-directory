import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebaseProjectsWebAppsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseProjectsWebAppsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseProjectsWebAppsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseProjectsWebAppsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseProjectsWebAppsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsListSecurityOption1;
    option2?: FirebaseProjectsWebAppsListSecurityOption2;
    option3?: FirebaseProjectsWebAppsListSecurityOption3;
    option4?: FirebaseProjectsWebAppsListSecurityOption4;
}
export declare class FirebaseProjectsWebAppsListRequest extends SpeakeasyBase {
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
     * The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
     */
    pageSize?: number;
    /**
     * Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing.
     */
    pageToken?: string;
    /**
     * The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
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
     * Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned.
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
export declare class FirebaseProjectsWebAppsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listWebAppsResponse?: shared.ListWebAppsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
