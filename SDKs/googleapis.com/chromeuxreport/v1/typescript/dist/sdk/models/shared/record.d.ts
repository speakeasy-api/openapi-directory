import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPeriod } from "./collectionperiod";
import { Key } from "./key";
import { Metric } from "./metric";
/**
 * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
 */
export declare class RecordT extends SpeakeasyBase {
    /**
     * The collection period is a date range which includes the `first` and `last` day.
     */
    collectionPeriod?: CollectionPeriod;
    /**
     * Key defines all the dimensions that identify this record as unique.
     */
    key?: Key;
    /**
     * Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]
     */
    metrics?: Record<string, Metric>;
}
