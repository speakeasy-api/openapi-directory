import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Keeps the number of calls without x-fapi-customer-ip-address header present
 */
export declare class SandboxRetryCacheEntry extends SpeakeasyBase {
    /**
     * Cache key
     */
    cacheKey?: string;
    /**
     * Number of retries ( up to 4 )
     */
    count?: number;
    /**
     * Expiration timestamp of the entry
     */
    expirationTimestamp?: Date;
}
