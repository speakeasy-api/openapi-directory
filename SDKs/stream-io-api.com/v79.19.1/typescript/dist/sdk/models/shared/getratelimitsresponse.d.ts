import { SpeakeasyBase } from "../../../internal/utils";
import { LimitInfo } from "./limitinfo";
/**
 * Get Rate Limits Response
 */
export declare class GetRateLimitsResponse extends SpeakeasyBase {
    /**
     * Map of endpoint rate limits for the Android platform
     */
    android?: Record<string, LimitInfo>;
    duration: string;
    /**
     * Map of endpoint rate limits for the iOS platform
     */
    ios?: Record<string, LimitInfo>;
    /**
     * Map of endpoint rate limits for the server-side platform
     */
    serverSide?: Record<string, LimitInfo>;
    /**
     * Map of endpoint rate limits for the web platform
     */
    web?: Record<string, LimitInfo>;
}
