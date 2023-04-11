import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for cors support
 */
export declare class CorsSettings extends SpeakeasyBase {
    /**
     * Allow to pass credentials
     */
    allowCredentials: boolean;
    /**
     * The cors allowed headers
     */
    allowHeaders: string[];
    /**
     * The cors allowed methods
     */
    allowMethods: string[];
    /**
     * The cors allowed origin
     */
    allowOrigin: string;
    /**
     * Whether or not cors is enabled
     */
    enabled: boolean;
    /**
     * The cors excluded patterns
     */
    excludedPatterns: string[];
    /**
     * The cors exposed header
     */
    exposeHeaders: string[];
    /**
     * Cors max age
     */
    maxAge: number;
}
