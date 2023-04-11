import { SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
/**
 * GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
 */
export declare class GetOpenIDConfigResponse extends SpeakeasyBase {
    /**
     * RFC-2616: cache control support
     */
    cacheHeader?: HttpCacheControlResponseHeader;
    /**
     * Supported claims.
     */
    claimsSupported?: string[];
    /**
     * Supported grant types.
     */
    grantTypes?: string[];
    /**
     * supported ID Token signing Algorithms.
     */
    idTokenSigningAlgValuesSupported?: string[];
    /**
     * OIDC Issuer.
     */
    issuer?: string;
    /**
     * JSON Web Key uri.
     */
    jwksUri?: string;
    /**
     * Supported response types.
     */
    responseTypesSupported?: string[];
    /**
     * Supported subject types.
     */
    subjectTypesSupported?: string[];
}
