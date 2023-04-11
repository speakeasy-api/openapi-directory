import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Obtain new JWT pair.
 */
export declare class SpectacularJWTObtain extends SpeakeasyBase {
    /**
     * Your access token
     */
    access?: string;
    /**
     * Access token expires in seconds
     */
    accessExpires?: number;
    /**
     * Your refresh token
     */
    refresh?: string;
    /**
     * Refresh token expires in seconds
     */
    refreshExpires?: number;
}
