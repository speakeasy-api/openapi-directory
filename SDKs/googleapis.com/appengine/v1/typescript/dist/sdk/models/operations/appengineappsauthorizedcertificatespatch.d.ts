import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsAuthorizedCertificatesPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineAppsAuthorizedCertificatesPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    authorizedCertificate?: shared.AuthorizedCertificate;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
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
     * Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class AppengineAppsAuthorizedCertificatesPatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    authorizedCertificate?: shared.AuthorizedCertificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
