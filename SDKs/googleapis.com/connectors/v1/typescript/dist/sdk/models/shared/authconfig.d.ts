import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariable } from "./configvariable";
import { Oauth2ClientCredentials } from "./oauth2clientcredentials";
import { Oauth2JwtBearer } from "./oauth2jwtbearer";
import { SshPublicKey } from "./sshpublickey";
import { UserPassword } from "./userpassword";
/**
 * The type of authentication configured.
 */
export declare enum AuthConfigAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}
/**
 * AuthConfig defines details of a authentication type.
 */
export declare class AuthConfig extends SpeakeasyBase {
    /**
     * List containing additional auth configs.
     */
    additionalVariables?: ConfigVariable[];
    /**
     * The type of authentication configured.
     */
    authType?: AuthConfigAuthTypeEnum;
    /**
     * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
     */
    oauth2ClientCredentials?: Oauth2ClientCredentials;
    /**
     * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
     */
    oauth2JwtBearer?: Oauth2JwtBearer;
    /**
     * Parameters to support Ssh public key Authentication.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * Parameters to support Username and Password Authentication.
     */
    userPassword?: UserPassword;
}
