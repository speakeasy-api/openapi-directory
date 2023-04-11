import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A suggestion by the service to the worker to dynamically split the WorkItem.
 */
export declare class ApproximateSplitRequest extends SpeakeasyBase {
    /**
     * A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).
     */
    fractionConsumed?: number;
    /**
     * The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input).
     */
    fractionOfRemainder?: number;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    position?: Position;
}
