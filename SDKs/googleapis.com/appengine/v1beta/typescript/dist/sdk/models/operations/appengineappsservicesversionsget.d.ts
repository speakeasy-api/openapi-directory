import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsServicesVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsServicesVersionsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsGetSecurityOption1;
    option2?: AppengineAppsServicesVersionsGetSecurityOption2;
    option3?: AppengineAppsServicesVersionsGetSecurityOption3;
}
/**
 * Controls the set of fields returned in the Get response.
 */
export declare enum AppengineAppsServicesVersionsGetViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class AppengineAppsServicesVersionsGetRequest extends SpeakeasyBase {
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
     * Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
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
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId: string;
    /**
     * Controls the set of fields returned in the Get response.
     */
    view?: AppengineAppsServicesVersionsGetViewEnum;
}
export declare class AppengineAppsServicesVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    version?: shared.Version;
}
