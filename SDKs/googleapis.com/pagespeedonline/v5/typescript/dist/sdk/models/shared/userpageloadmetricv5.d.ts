import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * A CrUX metric object for a single metric and form factor.
 */
export declare class UserPageLoadMetricV5 extends SpeakeasyBase {
    /**
     * The category of the specific time metric.
     */
    category?: string;
    /**
     * Metric distributions. Proportions should sum up to 1.
     */
    distributions?: Bucket[];
    /**
     * Identifies the form factor of the metric being collected.
     */
    formFactor?: string;
    /**
     * The median number of the metric, in millisecond.
     */
    median?: number;
    /**
     * Identifies the type of the metric.
     */
    metricId?: string;
    /**
     * We use this field to store certain percentile value for this metric. For v4, this field contains pc50. For v5, this field contains pc90.
     */
    percentile?: number;
}
