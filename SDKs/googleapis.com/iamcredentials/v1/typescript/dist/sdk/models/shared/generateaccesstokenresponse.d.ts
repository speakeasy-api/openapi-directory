import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class GenerateAccessTokenResponse extends SpeakeasyBase {
    /**
     * The OAuth 2.0 access token.
     */
    accessToken?: string;
    /**
     * Token expiration time. The expiration time is always set.
     */
    expireTime?: string;
}
