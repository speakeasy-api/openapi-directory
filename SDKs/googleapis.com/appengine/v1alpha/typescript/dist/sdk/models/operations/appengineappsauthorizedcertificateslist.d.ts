import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesListSecurity extends SpeakeasyBase {
    option1?: AppengineAppsAuthorizedCertificatesListSecurityOption1;
    option2?: AppengineAppsAuthorizedCertificatesListSecurityOption2;
    option3?: AppengineAppsAuthorizedCertificatesListSecurityOption3;
}
/**
 * Controls the set of fields returned in the LIST response.
 */
export declare enum AppengineAppsAuthorizedCertificatesListViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE",
    FullCertificate = "FULL_CERTIFICATE"
}
export declare class AppengineAppsAuthorizedCertificatesListRequest extends SpeakeasyBase {
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
     * Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Controls the set of fields returned in the LIST response.
     */
    view?: AppengineAppsAuthorizedCertificatesListViewEnum;
}
export declare class AppengineAppsAuthorizedCertificatesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAuthorizedCertificatesResponse?: shared.ListAuthorizedCertificatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
