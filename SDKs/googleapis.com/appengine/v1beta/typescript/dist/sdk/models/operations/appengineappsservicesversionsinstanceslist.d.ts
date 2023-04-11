import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsInstancesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsInstancesListSecurityOption1;
    option2?: AppengineAppsServicesVersionsInstancesListSecurityOption2;
    option3?: AppengineAppsServicesVersionsInstancesListSecurityOption3;
}
export declare class AppengineAppsServicesVersionsInstancesListRequest extends SpeakeasyBase {
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
     * Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
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
     * Part of `parent`. See documentation of `appsId`.
     */
    versionsId: string;
}
export declare class AppengineAppsServicesVersionsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
