import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response with a new access token.
 */
export declare class RefreshRuntimeTokenInternalResponse extends SpeakeasyBase {
    /**
     * The OAuth 2.0 access token.
     */
    accessToken?: string;
    /**
     * Output only. Token expiration time.
     */
    expireTime?: string;
}
