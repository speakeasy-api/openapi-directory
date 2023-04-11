import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials } from "./googlecloudconnectorsv1authconfigoauth2clientcredentials";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer } from "./googlecloudconnectorsv1authconfigoauth2jwtbearer";
import { GoogleCloudConnectorsV1AuthConfigSshPublicKey } from "./googlecloudconnectorsv1authconfigsshpublickey";
import { GoogleCloudConnectorsV1AuthConfigUserPassword } from "./googlecloudconnectorsv1authconfiguserpassword";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
/**
 * The type of authentication configured.
 */
export declare enum GoogleCloudConnectorsV1AuthConfigAuthTypeEnum {
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
export declare class GoogleCloudConnectorsV1AuthConfig extends SpeakeasyBase {
    /**
     * List containing additional auth configs.
     */
    additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[];
    /**
     * The type of authentication configured.
     */
    authType?: GoogleCloudConnectorsV1AuthConfigAuthTypeEnum;
    /**
     * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
     */
    oauth2ClientCredentials?: GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials;
    /**
     * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
     */
    oauth2JwtBearer?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer;
    /**
     * Parameters to support Ssh public key Authentication.
     */
    sshPublicKey?: GoogleCloudConnectorsV1AuthConfigSshPublicKey;
    /**
     * Parameters to support Username and Password Authentication.
     */
    userPassword?: GoogleCloudConnectorsV1AuthConfigUserPassword;
}
