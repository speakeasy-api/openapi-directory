import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccessTokenRequestBody extends SpeakeasyBase {
    grantType: string;
    password?: string;
    refreshToken?: string;
    scope: string;
    userId?: number;
    username?: string;
}
export declare class GetAccessTokenSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetAccessTokenRequest extends SpeakeasyBase {
    request?: GetAccessTokenRequestBody;
    security: GetAccessTokenSecurity;
}
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: any;
    tokenError?: shared.TokenError;
}
