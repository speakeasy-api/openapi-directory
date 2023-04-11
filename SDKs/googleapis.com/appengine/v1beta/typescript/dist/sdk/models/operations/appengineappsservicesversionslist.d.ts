import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsServicesVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsListSecurityOption1;
    option2?: AppengineAppsServicesVersionsListSecurityOption2;
    option3?: AppengineAppsServicesVersionsListSecurityOption3;
}
/**
 * Controls the set of fields returned in the List response.
 */
export declare enum AppengineAppsServicesVersionsListViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class AppengineAppsServicesVersionsListRequest extends SpeakeasyBase {
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
     * Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
     */
    appsId: string;
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
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Part of `parent`. See documentation of `appsId`.
     */
    servicesId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Controls the set of fields returned in the List response.
     */
    view?: AppengineAppsServicesVersionsListViewEnum;
}
export declare class AppengineAppsServicesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
