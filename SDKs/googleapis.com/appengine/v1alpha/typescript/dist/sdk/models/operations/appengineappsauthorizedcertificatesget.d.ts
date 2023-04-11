import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsAuthorizedCertificatesGetSecurityOption1;
    option2?: AppengineAppsAuthorizedCertificatesGetSecurityOption2;
    option3?: AppengineAppsAuthorizedCertificatesGetSecurityOption3;
}
/**
 * Controls the set of fields returned in the GET response.
 */
export declare enum AppengineAppsAuthorizedCertificatesGetViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE",
    FullCertificate = "FULL_CERTIFICATE"
}
export declare class AppengineAppsAuthorizedCertificatesGetRequest extends SpeakeasyBase {
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
     * Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     */
    appsId: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    authorizedCertificatesId: string;
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Controls the set of fields returned in the GET response.
     */
    view?: AppengineAppsAuthorizedCertificatesGetViewEnum;
}
export declare class AppengineAppsAuthorizedCertificatesGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    authorizedCertificate?: shared.AuthorizedCertificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
