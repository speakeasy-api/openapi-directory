import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IntegrationsCallbackGenerateTokenSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Which product sends the request
 */
export declare enum IntegrationsCallbackGenerateTokenProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT",
    Ip = "IP",
    Apigee = "APIGEE",
    Security = "SECURITY"
}
export declare class IntegrationsCallbackGenerateTokenRequest extends SpeakeasyBase {
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
     * The auth code for the given request
     */
    code?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The gcp project id of the request
     */
    gcpProjectId?: string;
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
     * Which product sends the request
     */
    product?: IntegrationsCallbackGenerateTokenProductEnum;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Redirect uri of the auth code request
     */
    redirectUri?: string;
    /**
     * The auth config id for the given request
     */
    state?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class IntegrationsCallbackGenerateTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIntegrationsV1alphaGenerateTokenResponse?: shared.GoogleCloudIntegrationsV1alphaGenerateTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
