import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for OIDC Auth flow.
 */
export declare class IdentityServiceOidcConfig extends SpeakeasyBase {
    /**
     * PEM-encoded CA for OIDC provider.
     */
    certificateAuthorityData?: string;
    /**
     * ID for OIDC client application.
     */
    clientId?: string;
    /**
     * Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string;
    /**
     * Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console.
     */
    deployCloudConsoleProxy?: boolean;
    /**
     * Enable access token.
     */
    enableAccessToken?: boolean;
    /**
     * Output only. Encrypted OIDC Client secret
     */
    encryptedClientSecret?: string;
    /**
     * Comma-separated list of key-value pairs.
     */
    extraParams?: string;
    /**
     * Prefix to prepend to group name.
     */
    groupPrefix?: string;
    /**
     * Claim in OIDC ID token that holds group information.
     */
    groupsClaim?: string;
    /**
     * URI for the OIDC provider. This should point to the level below .well-known/openid-configuration.
     */
    issuerUri?: string;
    /**
     * Registered redirect uri to redirect users going through OAuth flow using kubectl plugin.
     */
    kubectlRedirectUri?: string;
    /**
     * Comma-separated list of identifiers.
     */
    scopes?: string;
    /**
     * Claim in OIDC ID token that holds username.
     */
    userClaim?: string;
    /**
     * Prefix to prepend to user name.
     */
    userPrefix?: string;
}
/**
 * Configuration for OIDC Auth flow.
 */
export declare class IdentityServiceOidcConfigInput extends SpeakeasyBase {
    /**
     * PEM-encoded CA for OIDC provider.
     */
    certificateAuthorityData?: string;
    /**
     * ID for OIDC client application.
     */
    clientId?: string;
    /**
     * Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string;
    /**
     * Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console.
     */
    deployCloudConsoleProxy?: boolean;
    /**
     * Enable access token.
     */
    enableAccessToken?: boolean;
    /**
     * Comma-separated list of key-value pairs.
     */
    extraParams?: string;
    /**
     * Prefix to prepend to group name.
     */
    groupPrefix?: string;
    /**
     * Claim in OIDC ID token that holds group information.
     */
    groupsClaim?: string;
    /**
     * URI for the OIDC provider. This should point to the level below .well-known/openid-configuration.
     */
    issuerUri?: string;
    /**
     * Registered redirect uri to redirect users going through OAuth flow using kubectl plugin.
     */
    kubectlRedirectUri?: string;
    /**
     * Comma-separated list of identifiers.
     */
    scopes?: string;
    /**
     * Claim in OIDC ID token that holds username.
     */
    userClaim?: string;
    /**
     * Prefix to prepend to user name.
     */
    userPrefix?: string;
}
