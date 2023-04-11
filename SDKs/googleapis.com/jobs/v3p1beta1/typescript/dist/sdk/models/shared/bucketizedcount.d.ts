import { SpeakeasyBase } from "../../../internal/utils";
import { BucketRange } from "./bucketrange";
/**
 * Represents count of jobs within one bucket.
 */
export declare class BucketizedCount extends SpeakeasyBase {
    /**
     * Number of jobs whose numeric field value fall into `range`.
     */
    count?: number;
    /**
     * Represents starting and ending value of a range in double.
     */
    range?: BucketRange;
}
