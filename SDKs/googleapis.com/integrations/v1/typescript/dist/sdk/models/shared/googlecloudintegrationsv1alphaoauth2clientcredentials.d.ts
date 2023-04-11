import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
/**
 * Represent how to pass parameters to fetch access token
 */
export declare enum GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum {
    RequestTypeUnspecified = "REQUEST_TYPE_UNSPECIFIED",
    RequestBody = "REQUEST_BODY",
    QueryParameters = "QUERY_PARAMETERS",
    EncodedHeader = "ENCODED_HEADER"
}
/**
 * For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
 */
export declare class GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials extends SpeakeasyBase {
    /**
     * The access token represents the authorization of a specific application to access specific parts of a user’s data.
     */
    accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;
    /**
     * The client's ID.
     */
    clientId?: string;
    /**
     * The client's secret.
     */
    clientSecret?: string;
    /**
     * Represent how to pass parameters to fetch access token
     */
    requestType?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum;
    /**
     * A space-delimited list of requested scope permissions.
     */
    scope?: string;
    /**
     * The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.
     */
    tokenEndpoint?: string;
    /**
     * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
     */
    tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
}
