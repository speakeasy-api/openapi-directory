import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RefreshTokenGrantTypeEnum {
    RefreshToken = "refresh_token"
}
export declare class RefreshToken extends SpeakeasyBase {
    /**
     * Client ID
     */
    clientId?: string;
    /**
     * Client secret
     */
    clientSecret?: string;
    grantType?: RefreshTokenGrantTypeEnum;
    /**
     * Redirect URI
     */
    redirectUri?: string;
    /**
     * Refresh token
     */
    refreshToken?: string;
}
