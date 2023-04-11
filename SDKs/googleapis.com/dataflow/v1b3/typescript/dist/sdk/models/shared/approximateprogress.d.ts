import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
 */
export declare class ApproximateProgress extends SpeakeasyBase {
    /**
     * Obsolete.
     */
    percentComplete?: number;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    position?: Position;
    /**
     * Obsolete.
     */
    remainingTime?: string;
}
