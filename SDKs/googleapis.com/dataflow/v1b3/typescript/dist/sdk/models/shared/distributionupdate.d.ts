import { SpeakeasyBase } from "../../../internal/utils";
import { Histogram } from "./histogram";
import { SplitInt64 } from "./splitint64";
/**
 * A metric value representing a distribution.
 */
export declare class DistributionUpdate extends SpeakeasyBase {
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    count?: SplitInt64;
    /**
     * Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.
     */
    histogram?: Histogram;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    max?: SplitInt64;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    min?: SplitInt64;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    sum?: SplitInt64;
    /**
     * Use a double since the sum of squares is likely to overflow int64.
     */
    sumOfSquares?: number;
}
