import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity-Aware Proxy
 */
export declare class BackendServiceIAP extends SpeakeasyBase {
    /**
     * Whether the serving infrastructure will authenticate and authorize all incoming requests. If true, the oauth2ClientId and oauth2ClientSecret fields must be non-empty.
     */
    enabled?: boolean;
    /**
     * OAuth2 client ID to use for the authentication flow.
     */
    oauth2ClientId?: string;
    /**
     * OAuth2 client secret to use for the authentication flow. For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field. @InputOnly
     */
    oauth2ClientSecret?: string;
    /**
     * [Output Only] SHA256 hash value for the field oauth2_client_secret above.
     */
    oauth2ClientSecretSha256?: string;
}
