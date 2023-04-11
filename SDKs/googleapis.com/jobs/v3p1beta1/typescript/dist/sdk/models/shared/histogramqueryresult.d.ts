import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Histogram result that matches HistogramSpec specified in searches.
 */
export declare class HistogramQueryResult extends SpeakeasyBase {
    /**
     * A map from the values of the facet associated with distinct values to the number of matching entries with corresponding value. The key format is: * (for string histogram) string values stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`.
     */
    histogram?: Record<string, string>;
    /**
     * Requested histogram expression.
     */
    histogramQuery?: string;
}
