import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpanScore } from "./spanscore";
import { Score } from "./score";



export class AttributeScores extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spanScores", elemType: SpanScore })
  spanScores?: SpanScore[];

  @SpeakeasyMetadata({ data: "json, name=summaryScore" })
  summaryScore?: Score;
}
