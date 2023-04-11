import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Estimated fractional progress for each step, from `0` to `1`.
 */
export declare class Progress extends SpeakeasyBase {
    /**
     * Estimated fractional progress for `analyzing` step.
     */
    analyzed?: number;
    /**
     * Estimated fractional progress for `encoding` step.
     */
    encoded?: number;
    /**
     * Estimated fractional progress for `notifying` step.
     */
    notified?: number;
    /**
     * Estimated fractional progress for `uploading` step.
     */
    uploaded?: number;
}
