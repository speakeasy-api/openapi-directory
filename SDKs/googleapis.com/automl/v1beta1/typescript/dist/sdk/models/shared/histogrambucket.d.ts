import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A bucket of a histogram.
 */
export declare class HistogramBucket extends SpeakeasyBase {
    /**
     * The number of data values that are in the bucket, i.e. are between min and max values.
     */
    count?: string;
    /**
     * The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive.
     */
    max?: number;
    /**
     * The minimum value of the bucket, inclusive.
     */
    min?: number;
}
