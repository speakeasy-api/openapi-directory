import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional details for quota exceeded error for resource quota.
 */
export declare class QuotaExceededInfo extends SpeakeasyBase {
    /**
     * The map holding related quota dimensions.
     */
    dimensions?: Record<string, string>;
    /**
     * Current effective quota limit. The limit's unit depends on the quota type or metric.
     */
    limit?: number;
    /**
     * The name of the quota limit.
     */
    limitName?: string;
    /**
     * The Compute Engine quota metric name.
     */
    metricName?: string;
}
