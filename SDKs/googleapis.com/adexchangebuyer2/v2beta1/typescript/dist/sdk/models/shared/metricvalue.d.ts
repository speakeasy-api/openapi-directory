import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
 */
export declare class MetricValue extends SpeakeasyBase {
    /**
     * The expected value of the metric.
     */
    value?: string;
    /**
     * The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value
     */
    variance?: string;
}
