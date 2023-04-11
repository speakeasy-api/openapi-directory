import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResultCount } from "./aggregationresultcount";
import { AggregationResultFrequency } from "./aggregationresultfrequency";
import { AggregationResultHistogram } from "./aggregationresulthistogram";
import { AggregationResultSum } from "./aggregationresultsum";
/**
 * Message describing a result of an aggregation.
 */
export declare class AggregationResult extends SpeakeasyBase {
    /**
     * The result of a count aggregation.
     */
    count?: AggregationResultCount;
    field?: string;
    /**
     * The result of a frequency distribution aggregation.
     */
    frequency?: AggregationResultFrequency;
    /**
     * The result of a bucketed histogram aggregation.
     */
    histogram?: AggregationResultHistogram;
    /**
     * The result of a sum aggregation.
     */
    sum?: AggregationResultSum;
}
