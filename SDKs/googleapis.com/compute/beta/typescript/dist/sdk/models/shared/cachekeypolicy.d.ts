import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing what to include in the cache key for a request for Cloud CDN.
 */
export declare class CacheKeyPolicy extends SpeakeasyBase {
    /**
     * If true, requests to different hosts will be cached separately.
     */
    includeHost?: boolean;
    /**
     * Allows HTTP request headers (by name) to be used in the cache key.
     */
    includeHttpHeaders?: string[];
    /**
     * Allows HTTP cookies (by name) to be used in the cache key. The name=value pair will be used in the cache key Cloud CDN generates.
     */
    includeNamedCookies?: string[];
    /**
     * If true, http and https requests will be cached separately.
     */
    includeProtocol?: boolean;
    /**
     * If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. If neither is set, the entire query string will be included. If false, the query string will be excluded from the cache key entirely.
     */
    includeQueryString?: boolean;
    /**
     * Names of query string parameters to exclude in cache keys. All other parameters will be included. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
     */
    queryStringBlacklist?: string[];
    /**
     * Names of query string parameters to include in cache keys. All other parameters will be excluded. Either specify query_string_whitelist or query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
     */
    queryStringWhitelist?: string[];
}
