import { SpeakeasyBase } from "../../../internal/utils";
/**
 * access token result
 */
export declare class GenerateAccessTokenResponse extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: string;
    refreshToken?: string;
    tokenType?: string;
}
