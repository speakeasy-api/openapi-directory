import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to access a validation authority server
 */
export declare class ValidationAuthority extends SpeakeasyBase {
    /**
     * Bypass http calls, every certificates are valids
     */
    alwaysValid: boolean;
    /**
     * The TTL for invalid access response caching
     */
    badTtl: number;
    /**
     * The description of the settings
     */
    description: string;
    /**
     * The TTL for valid access response caching
     */
    goodTtl: number;
    /**
     * HTTP call headers
     */
    headers: Record<string, string>;
    /**
     * The host of the server
     */
    host: string;
    /**
     * The id of the settings
     */
    id: string;
    /**
     * The HTTP method
     */
    method: string;
    /**
     * The name of the settings
     */
    name: string;
    /**
     * Avoid caching responses
     */
    noCache: boolean;
    /**
     * The URL path
     */
    path: string;
    /**
     * The call timeout
     */
    timeout: number;
    /**
     * The URL of the server
     */
    url: string;
}
