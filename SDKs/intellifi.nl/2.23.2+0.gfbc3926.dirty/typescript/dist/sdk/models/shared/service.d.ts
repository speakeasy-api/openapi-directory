import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing service information
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Set this to `true` to send a reset request for the specific resource.
     */
    restartRequest?: boolean;
}
/**
 * A JSON object containing the service
 */
export declare class Service extends SpeakeasyBase {
    /**
     * Is increased with 1 when the service starts. Is never cleared (unless the database is adjusted).
     */
    bootCount?: number;
    /**
     * JSON object with possible settings. Refer to individual service documentation for a good overview.
     */
    config?: Record<string, any>;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Human readable name for the resource.
     */
    name?: string;
    /**
     * Set this to `true` to send a reset request for the specific resource.
     */
    restartRequest?: boolean;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
    /**
     * Current running version of the resource.
     */
    version?: string;
}
