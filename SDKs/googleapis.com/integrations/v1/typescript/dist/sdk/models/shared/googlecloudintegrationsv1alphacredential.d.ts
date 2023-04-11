import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthToken } from "./googlecloudintegrationsv1alphaauthtoken";
import { GoogleCloudIntegrationsV1alphaJwt } from "./googlecloudintegrationsv1alphajwt";
import { GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode } from "./googlecloudintegrationsv1alphaoauth2authorizationcode";
import { GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials } from "./googlecloudintegrationsv1alphaoauth2clientcredentials";
import { GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials } from "./googlecloudintegrationsv1alphaoauth2resourceownercredentials";
import { GoogleCloudIntegrationsV1alphaOidcToken } from "./googlecloudintegrationsv1alphaoidctoken";
import { GoogleCloudIntegrationsV1alphaServiceAccountCredentials } from "./googlecloudintegrationsv1alphaserviceaccountcredentials";
import { GoogleCloudIntegrationsV1alphaUsernameAndPassword } from "./googlecloudintegrationsv1alphausernameandpassword";
/**
 * Credential type associated with auth config.
 */
export declare enum GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum {
    CredentialTypeUnspecified = "CREDENTIAL_TYPE_UNSPECIFIED",
    UsernameAndPassword = "USERNAME_AND_PASSWORD",
    ApiKey = "API_KEY",
    Oauth2AuthorizationCode = "OAUTH2_AUTHORIZATION_CODE",
    Oauth2Implicit = "OAUTH2_IMPLICIT",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    Oauth2ResourceOwnerCredentials = "OAUTH2_RESOURCE_OWNER_CREDENTIALS",
    Jwt = "JWT",
    AuthToken = "AUTH_TOKEN",
    ServiceAccount = "SERVICE_ACCOUNT",
    ClientCertificateOnly = "CLIENT_CERTIFICATE_ONLY",
    OidcToken = "OIDC_TOKEN"
}
/**
 * Defines parameters for a single, canonical credential.
 */
export declare class GoogleCloudIntegrationsV1alphaCredential extends SpeakeasyBase {
    /**
     * The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.
     */
    authToken?: GoogleCloudIntegrationsV1alphaAuthToken;
    /**
     * Credential type associated with auth config.
     */
    credentialType?: GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;
    /**
     * Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
     */
    jwt?: GoogleCloudIntegrationsV1alphaJwt;
    /**
     * The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
     */
    oauth2AuthorizationCode?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;
    /**
     * For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
     */
    oauth2ClientCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;
    /**
     * For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.
     */
    oauth2ResourceOwnerCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;
    /**
     * OIDC Token
     */
    oidcToken?: GoogleCloudIntegrationsV1alphaOidcToken;
    /**
     * Represents the service account which can be used to generate access token for authenticating the service call.
     */
    serviceAccountCredentials?: GoogleCloudIntegrationsV1alphaServiceAccountCredentials;
    /**
     * Username and password pair.
     */
    usernameAndPassword?: GoogleCloudIntegrationsV1alphaUsernameAndPassword;
}
