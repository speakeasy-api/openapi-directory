import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
 */
export declare class SourcePosition extends SpeakeasyBase {
    /**
     * First column on the source line associated with the source fragment.
     */
    column?: number;
    /**
     * Start position relative to the beginning of the file.
     */
    currentOffset?: number;
    /**
     * End position relative to the beginning of the file.
     */
    endOffset?: number;
    /**
     * Name of the `File`.
     */
    fileName?: string;
    /**
     * Line number of the source fragment. 1-based.
     */
    line?: number;
}
