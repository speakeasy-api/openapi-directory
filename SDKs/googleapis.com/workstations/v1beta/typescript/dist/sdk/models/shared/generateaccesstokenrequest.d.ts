import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for GenerateAccessToken.
 */
export declare class GenerateAccessTokenRequest extends SpeakeasyBase {
    /**
     * Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future.
     */
    expireTime?: string;
    /**
     * Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour.
     */
    ttl?: string;
}
