import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizationCodeGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials"
}
export declare class AuthorizationCode extends SpeakeasyBase {
    /**
     * Authorization code
     */
    authorizationCode?: string;
    /**
     * Client ID
     */
    clientId?: string;
    /**
     * Client secret
     */
    clientSecret?: string;
    grantType?: AuthorizationCodeGrantTypeEnum;
    /**
     * Redirect URI
     */
    redirectUri?: string;
}
