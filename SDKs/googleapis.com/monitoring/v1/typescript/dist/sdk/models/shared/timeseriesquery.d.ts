import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesFilter } from "./timeseriesfilter";
import { TimeSeriesFilterRatio } from "./timeseriesfilterratio";
/**
 * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
 */
export declare class TimeSeriesQuery extends SpeakeasyBase {
    /**
     * A query used to fetch time series with PromQL.
     */
    prometheusQuery?: string;
    /**
     * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
     */
    timeSeriesFilter?: TimeSeriesFilter;
    /**
     * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
     */
    timeSeriesFilterRatio?: TimeSeriesFilterRatio;
    /**
     * A query used to fetch time series with MQL.
     */
    timeSeriesQueryLanguage?: string;
    /**
     * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor.
     */
    unitOverride?: string;
}
