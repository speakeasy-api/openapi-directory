import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
/**
 * Represent how to pass parameters to fetch access token
 */
export declare enum GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}
/**
 * The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
 */
export declare class GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode extends SpeakeasyBase {
    /**
     * The access token represents the authorization of a specific application to access specific parts of a user’s data.
     */
    accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;
    /**
     * Indicates if the user has opted in Google Reauth Policy. If opted in, the refresh token will be valid for 20 hours, after which time users must re-authenticate in order to obtain a new one.
     */
    applyReauthPolicy?: boolean;
    /**
     * The Auth Code that is used to initially retrieve the access token.
     */
    authCode?: string;
    /**
     * The auth url endpoint to send the auth code request to.
     */
    authEndpoint?: string;
    /**
     * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
     */
    authParams?: GoogleCloudIntegrationsV1alphaParameterMap;
    /**
     * The client's id.
     */
    clientId?: string;
    /**
     * The client's secret.
     */
    clientSecret?: string;
    /**
     * Represent how to pass parameters to fetch access token
     */
    requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;
    /**
     * A space-delimited list of requested scope permissions.
     */
    scope?: string;
    /**
     * The token url endpoint to send the token request to.
     */
    tokenEndpoint?: string;
    /**
     * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
     */
    tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
