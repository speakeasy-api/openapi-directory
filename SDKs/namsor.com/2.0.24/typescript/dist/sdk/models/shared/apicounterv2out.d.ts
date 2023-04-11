import { SpeakeasyBase } from "../../../internal/utils";
import { APIKeyOut } from "./apikeyout";
/**
 * Detailed usage as reported by the deduplicating API counter.
 */
export declare class APICounterV2Out extends SpeakeasyBase {
    apiKey?: APIKeyOut;
    /**
     * The apiService corresponds to the classifier name.
     */
    apiService?: string;
    /**
     * The create datetime of the counter.
     */
    createdDateTime?: number;
    /**
     * The processing hostAddress.
     */
    hostAddress?: string;
    /**
     * The flush datetime of the counter.
     */
    lastFlushedDateTime?: number;
    /**
     * The last usage datetime of the counter.
     */
    lastUsedDateTime?: number;
    /**
     * Usage of special features, such as Chinese, Japanese.
     */
    serviceFeaturesUsage?: Record<string, number>;
    /**
     * The usage of the counter.
     */
    totalUsage?: number;
}
