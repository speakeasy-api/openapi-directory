import { SpeakeasyBase } from "../../../internal/utils";
export declare class TokenRequest extends SpeakeasyBase {
    /**
     * OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.
     */
    grantType: string;
    /**
     * MW Account password (to be used in password grant type)
     */
    password?: string;
    /**
     * Refresh token value for refresh token flow.
     */
    refreshToken?: string;
    /**
     * Authorization scope. Use 'privileged' for private endpoints.
     */
    scope: string;
    /**
     * Value for user_id grant type flow.
     */
    userId?: number;
    /**
     * MW Account email (to be used in password grant type)
     */
    username?: string;
}
