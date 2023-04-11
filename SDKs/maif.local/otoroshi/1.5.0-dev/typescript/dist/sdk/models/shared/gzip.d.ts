import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for gzip of service responses
 */
export declare class Gzip extends SpeakeasyBase {
    /**
     * Blacklisted mime types. Wildcard supported
     */
    blackList: string[];
    /**
     * Size of the GZip buffer
     */
    bufferSize: number;
    /**
     * Threshold for chunking data
     */
    chunkedThreshold: number;
    /**
     * Compression level. From 0 to 9
     */
    compressionLevel: number;
    /**
     * Whether gzip compression is enabled or not
     */
    enabled: boolean;
    /**
     * Patterns that are excluded from gzipping
     */
    excludedPatterns: string[];
    /**
     * Whitelisted mime types. Wildcard supported
     */
    whiteList: string[];
}
