import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityServiceAzureADConfig, IdentityServiceAzureADConfigInput } from "./identityserviceazureadconfig";
import { IdentityServiceGoogleConfig } from "./identityservicegoogleconfig";
import { IdentityServiceOidcConfig, IdentityServiceOidcConfigInput } from "./identityserviceoidcconfig";
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
 */
export declare class IdentityServiceAuthMethod extends SpeakeasyBase {
    /**
     * Configuration for the AzureAD Auth flow.
     */
    azureadConfig?: IdentityServiceAzureADConfig;
    /**
     * Configuration for the Google Plugin Auth flow.
     */
    googleConfig?: IdentityServiceGoogleConfig;
    /**
     * Identifier for auth config.
     */
    name?: string;
    /**
     * Configuration for OIDC Auth flow.
     */
    oidcConfig?: IdentityServiceOidcConfig;
    /**
     * Proxy server address to use for auth method.
     */
    proxy?: string;
}
/**
 * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
 */
export declare class IdentityServiceAuthMethodInput extends SpeakeasyBase {
    /**
     * Configuration for the AzureAD Auth flow.
     */
    azureadConfig?: IdentityServiceAzureADConfigInput;
    /**
     * Configuration for the Google Plugin Auth flow.
     */
    googleConfig?: IdentityServiceGoogleConfig;
    /**
     * Identifier for auth config.
     */
    name?: string;
    /**
     * Configuration for OIDC Auth flow.
     */
    oidcConfig?: IdentityServiceOidcConfigInput;
    /**
     * Proxy server address to use for auth method.
     */
    proxy?: string;
}
