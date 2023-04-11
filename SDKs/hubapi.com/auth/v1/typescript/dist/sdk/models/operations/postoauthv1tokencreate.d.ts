import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PostOauthV1TokenCreateRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code",
    RefreshToken = "refresh_token"
}
export declare class PostOauthV1TokenCreateRequestBody extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    code?: string;
    grantType?: PostOauthV1TokenCreateRequestBodyGrantTypeEnum;
    redirectUri?: string;
    refreshToken?: string;
}
export declare class PostOauthV1TokenCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    tokenResponseIF?: shared.TokenResponseIF;
}
