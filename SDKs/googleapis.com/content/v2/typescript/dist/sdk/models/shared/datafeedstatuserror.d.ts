import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusExample } from "./datafeedstatusexample";
/**
 * An error occurring in the feed, like "invalid price".
 */
export declare class DatafeedStatusError extends SpeakeasyBase {
    /**
     * The code of the error, e.g., "validation/invalid_value".
     */
    code?: string;
    /**
     * The number of occurrences of the error in the feed.
     */
    count?: string;
    /**
     * A list of example occurrences of the error, grouped by product.
     */
    examples?: DatafeedStatusExample[];
    /**
     * The error message, e.g., "Invalid price".
     */
    message?: string;
}
