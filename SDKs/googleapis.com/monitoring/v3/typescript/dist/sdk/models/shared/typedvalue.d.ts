import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
/**
 * A single strongly-typed value.
 */
export declare class TypedValue extends SpeakeasyBase {
    /**
     * A Boolean value: true or false.
     */
    boolValue?: boolean;
    /**
     * Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
     */
    distributionValue?: Distribution;
    /**
     * A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision.
     */
    doubleValue?: number;
    /**
     * A 64-bit integer. Its range is approximately ±9.2x1018.
     */
    int64Value?: string;
    /**
     * A variable-length string value.
     */
    stringValue?: string;
}
