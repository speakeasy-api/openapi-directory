import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Matched range of a snippet [start, end).
 */
export declare class MatchRange extends SpeakeasyBase {
    /**
     * End of the match in the snippet.
     */
    end?: number;
    /**
     * Starting position of the match in the snippet.
     */
    start?: number;
}
