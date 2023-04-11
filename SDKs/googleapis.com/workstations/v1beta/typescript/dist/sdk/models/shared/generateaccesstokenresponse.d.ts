import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for GenerateAccessToken.
 */
export declare class GenerateAccessTokenResponse extends SpeakeasyBase {
    /**
     * The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname, for example, `Authorization: Bearer `.
     */
    accessToken?: string;
    /**
     * Time at which the generated token will expire.
     */
    expireTime?: string;
}
