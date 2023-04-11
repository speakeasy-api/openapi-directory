import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * Snippet of the search result, which summarizes the content of the resulting page.
 */
export declare class Snippet extends SpeakeasyBase {
    /**
     * The matched ranges in the snippet.
     */
    matchRanges?: MatchRange[];
    /**
     * The snippet of the document. The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.
     */
    snippet?: string;
}
