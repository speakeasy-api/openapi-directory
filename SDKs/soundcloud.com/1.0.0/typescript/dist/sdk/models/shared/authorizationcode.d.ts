import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizationCodeGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials"
}
export declare class AuthorizationCode extends SpeakeasyBase {
    authorizationCode?: string;
    clientId?: string;
    clientSecret?: string;
    grantType?: AuthorizationCodeGrantTypeEnum;
    redirectUri?: string;
}
