import { SpeakeasyBase } from "../../../internal/utils";
import { Score } from "./score";
import { SpanScore } from "./spanscore";
/**
 * This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
 */
export declare class AttributeScores extends SpeakeasyBase {
    /**
     * Per-span scores.
     */
    spanScores?: SpanScore[];
    /**
     * Analysis scores are described by a value and a ScoreType.
     */
    summaryScore?: Score;
}
