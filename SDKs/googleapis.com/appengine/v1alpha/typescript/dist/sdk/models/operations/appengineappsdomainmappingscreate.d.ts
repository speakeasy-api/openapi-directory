import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineAppsDomainMappingsCreateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
 */
export declare enum AppengineAppsDomainMappingsCreateOverrideStrategyEnum {
    UnspecifiedDomainOverrideStrategy = "UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY",
    Strict = "STRICT",
    Override = "OVERRIDE"
}
export declare class AppengineAppsDomainMappingsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    domainMapping?: shared.DomainMapping;
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
     * Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
     */
    noManagedCertificate?: boolean;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     */
    overrideStrategy?: AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
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
}
export declare class AppengineAppsDomainMappingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
