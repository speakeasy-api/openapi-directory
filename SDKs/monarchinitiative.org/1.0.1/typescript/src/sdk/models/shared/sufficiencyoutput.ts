import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SufficiencyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorical_score" })
  categoricalScore?: number;

  @SpeakeasyMetadata({ data: "json, name=scaled_score" })
  scaledScore?: number;

  @SpeakeasyMetadata({ data: "json, name=simple_score" })
  simpleScore?: number;
}
