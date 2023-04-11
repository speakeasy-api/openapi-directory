import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPeriod } from "./collectionperiod";
import { HistoryKey } from "./historykey";
import { MetricTimeseries } from "./metrictimeseries";
/**
 * HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.
 */
export declare class HistoryRecord extends SpeakeasyBase {
    /**
     * The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points.
     */
    collectionPeriods?: CollectionPeriod[];
    /**
     * Key defines all the dimensions that identify this record as unique.
     */
    key?: HistoryKey;
    /**
     * Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: Record<string, MetricTimeseries>;
}
