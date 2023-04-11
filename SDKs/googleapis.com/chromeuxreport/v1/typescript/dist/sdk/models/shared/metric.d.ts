import { SpeakeasyBase } from "../../../internal/utils";
import { Bin } from "./bin";
import { Percentiles } from "./percentiles";
/**
 * A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1.
     */
    histogram?: Bin[];
    /**
     * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
     */
    percentiles?: Percentiles;
}
