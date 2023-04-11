import { SpeakeasyBase } from "../../../internal/utils";
import { TimeseriesBin } from "./timeseriesbin";
import { TimeseriesPercentiles } from "./timeseriespercentiles";
/**
 * A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period.
 */
export declare class MetricTimeseries extends SpeakeasyBase {
    /**
     * The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry.
     */
    histogramTimeseries?: TimeseriesBin[];
    /**
     * Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
     */
    percentilesTimeseries?: TimeseriesPercentiles;
}
