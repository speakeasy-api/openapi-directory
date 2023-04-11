import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Refresh Access token.
 */
export declare class SpectacularJWTRefresh extends SpeakeasyBase {
    /**
     * Your access token
     */
    access?: string;
    /**
     * Access token expires in seconds
     */
    accessExpires?: number;
}
