import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Memory hash detection contributing to the binary family match.
 */
export declare class Detection extends SpeakeasyBase {
    /**
     * The name of the binary associated with the memory hash signature detection.
     */
    binary?: string;
    /**
     * The percentage of memory page hashes in the signature that were matched.
     */
    percentPagesMatched?: number;
}
