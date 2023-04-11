import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity-Aware Proxy
 */
export declare class IdentityAwareProxy extends SpeakeasyBase {
    /**
     * Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
     */
    enabled?: boolean;
    /**
     * OAuth2 client ID to use for the authentication flow.
     */
    oauth2ClientId?: string;
    /**
     * OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
     */
    oauth2ClientSecret?: string;
    /**
     * Output only. Hex-encoded SHA-256 hash of the client secret.@OutputOnly
     */
    oauth2ClientSecretSha256?: string;
}
/**
 * Identity-Aware Proxy
 */
export declare class IdentityAwareProxyInput extends SpeakeasyBase {
    /**
     * Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
     */
    enabled?: boolean;
    /**
     * OAuth2 client ID to use for the authentication flow.
     */
    oauth2ClientId?: string;
    /**
     * OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
     */
    oauth2ClientSecret?: string;
}
