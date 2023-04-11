import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
 */
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum {
    True = "true",
    False = "false"
}
/**
 * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
 */
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}
/**
 * User type to be authorized (usually 'customer')
 */
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
export declare class CreateAccessTokenApplicationXWwwFormUrlencoded extends SpeakeasyBase {
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
    expires?: CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;
    /**
     * Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
     */
    grantType: CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;
    /**
     * User type to be authorized (usually 'customer')
     */
    realm?: CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;
    /**
     * Pass this along with grant_type=refresh_token to get a fresh access token
     */
    refreshToken?: string;
}
export declare class CreateAccessTokenFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    oauthAccessTokenResponse?: shared.OauthAccessTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
