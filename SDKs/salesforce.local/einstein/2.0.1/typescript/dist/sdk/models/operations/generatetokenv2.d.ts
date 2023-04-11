import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * specify the authentication method desired
 */
export declare enum GenerateTokenV2RequestBodyGrantTypeEnum {
    UrnIetfParamsOauthGrantTypeJwtBearer = "urn:ietf:params:oauth:grant-type:jwt-bearer",
    RefreshToken = "refresh_token"
}
export declare class GenerateTokenV2RequestBody extends SpeakeasyBase {
    /**
     * encrypted payload to identify yourself
     */
    assertion?: string;
    /**
     * specify the authentication method desired
     */
    grantType?: GenerateTokenV2RequestBodyGrantTypeEnum;
    /**
     * The refresh token you created previously.
     */
    refreshToken?: string;
    /**
     * set to `offline` to generate a refresh token
     */
    scope?: string;
    /**
     * Number of seconds until the access token expires. Default is 60 seconds. Maximum value is 30 days
     */
    validFor?: number;
}
export declare class GenerateTokenV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * access token result
     */
    generateAccessTokenResponse?: shared.GenerateAccessTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
