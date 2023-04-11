import { SpeakeasyBase } from "../../../internal/utils";
import { Score } from "./score";
/**
 * This is a single score for a given span of text.
 */
export declare class SpanScore extends SpeakeasyBase {
    /**
     * "begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text.
     */
    begin?: number;
    end?: number;
    /**
     * Analysis scores are described by a value and a ScoreType.
     */
    score?: Score;
}
