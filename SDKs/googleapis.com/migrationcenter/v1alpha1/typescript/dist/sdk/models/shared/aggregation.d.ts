import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationHistogram } from "./aggregationhistogram";
/**
 * Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.
 */
export declare class Aggregation extends SpeakeasyBase {
    /**
     * Object count.
     */
    count?: Record<string, any>;
    /**
     * The name of the field on which to aggregate.
     */
    field?: string;
    /**
     * Frequency distribution of all field values.
     */
    frequency?: Record<string, any>;
    /**
     * Histogram of bucketed assets counts by field value.
     */
    histogram?: AggregationHistogram;
    /**
     * Sum of field values.
     */
    sum?: Record<string, any>;
}
