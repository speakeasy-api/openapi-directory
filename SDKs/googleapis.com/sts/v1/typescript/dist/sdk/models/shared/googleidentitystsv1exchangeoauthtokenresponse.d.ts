import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for ExchangeOauthToken. see https://www.rfc-editor.org/rfc/rfc6749#section-5.1
**/
export declare class GoogleIdentityStsV1ExchangeOauthTokenResponse extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
    scope?: string;
    tokenType?: string;
}
