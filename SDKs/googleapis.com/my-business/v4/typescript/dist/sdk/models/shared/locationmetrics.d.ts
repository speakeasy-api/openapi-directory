import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
/**
 * A series of Metrics and BreakdownMetrics associated with a Location over some time range.
 */
export declare class LocationMetrics extends SpeakeasyBase {
    /**
     * The location resource name these values belong to.
     */
    locationName?: string;
    /**
     * A list of values for the requested metrics.
     */
    metricValues?: MetricValue[];
    /**
     * IANA timezone for the location.
     */
    timeZone?: string;
}
