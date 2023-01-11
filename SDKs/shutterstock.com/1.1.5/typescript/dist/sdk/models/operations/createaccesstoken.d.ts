import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAccessTokenApplicationJsonGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}
export declare enum CreateAccessTokenApplicationJsonRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
export declare class CreateAccessTokenApplicationJson extends SpeakeasyBase {
    clientId: string;
    clientSecret?: string;
    code?: string;
    expires?: boolean;
    grantType: CreateAccessTokenApplicationJsonGrantTypeEnum;
    realm?: CreateAccessTokenApplicationJsonRealmEnum;
    refreshToken?: string;
}
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum {
    True = "true",
    False = "false"
}
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}
export declare enum CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
export declare class CreateAccessTokenApplicationXWwwFormUrlencoded extends SpeakeasyBase {
    clientId: string;
    clientSecret?: string;
    code?: string;
    expires?: CreateAccessTokenApplicationXWwwFormUrlencodedExpiresEnum;
    grantType: CreateAccessTokenApplicationXWwwFormUrlencodedGrantTypeEnum;
    realm?: CreateAccessTokenApplicationXWwwFormUrlencodedRealmEnum;
    refreshToken?: string;
}
export declare class CreateAccessTokenRequests extends SpeakeasyBase {
    object?: CreateAccessTokenApplicationJson;
    object1?: CreateAccessTokenApplicationXWwwFormUrlencoded;
}
export declare class CreateAccessTokenRequest extends SpeakeasyBase {
    request?: CreateAccessTokenRequests;
}
export declare class CreateAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    oauthAccessTokenResponse?: shared.OauthAccessTokenResponse;
    statusCode: number;
}
