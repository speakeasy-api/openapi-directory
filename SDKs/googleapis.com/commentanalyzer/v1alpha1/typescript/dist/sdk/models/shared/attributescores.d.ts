import { SpeakeasyBase } from "../../../internal/utils";
import { SpanScore } from "./spanscore";
import { Score } from "./score";
export declare class AttributeScores extends SpeakeasyBase {
    spanScores?: SpanScore[];
    summaryScore?: Score;
}
