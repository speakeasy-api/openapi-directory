import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
 */
export declare enum CreateAccessTokenApplicationJSONGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}
/**
 * User type to be authorized (usually 'customer')
 */
export declare enum CreateAccessTokenApplicationJSONRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
export declare class CreateAccessTokenApplicationJSON extends SpeakeasyBase {
    /**
     * Client ID (Consumer Key) of your application
     */
    clientId: string;
    /**
     * Client Secret (Consumer Secret) of your application
     */
    clientSecret?: string;
    /**
     * Response code from the /oauth/authorize flow; required if grant_type=authorization_code
     */
    code?: string;
    /**
     * Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
     */
    expires?: boolean;
    /**
     * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     */
    grantType: CreateAccessTokenApplicationJSONGrantTypeEnum;
    /**
     * User type to be authorized (usually 'customer')
     */
    realm?: CreateAccessTokenApplicationJSONRealmEnum;
    /**
     * Pass this along with grant_type=refresh_token to get a fresh access token
     */
    refreshToken?: string;
}
export declare class CreateAccessTokenJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    oauthAccessTokenResponse?: shared.OauthAccessTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
