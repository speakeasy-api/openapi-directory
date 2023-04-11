import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing what to include in the cache key for a request for Cloud CDN.
 */
export declare class BackendBucketCdnPolicyCacheKeyPolicy extends SpeakeasyBase {
    /**
     * Allows HTTP request headers (by name) to be used in the cache key.
     */
    includeHttpHeaders?: string[];
    /**
     * Names of query string parameters to include in cache keys. Default parameters are always included. '&' and '=' will be percent encoded and not treated as delimiters.
     */
    queryStringWhitelist?: string[];
}
