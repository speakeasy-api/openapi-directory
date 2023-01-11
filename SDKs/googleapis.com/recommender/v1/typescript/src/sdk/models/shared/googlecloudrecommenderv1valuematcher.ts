import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudRecommenderV1ValueMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchesPattern" })
  matchesPattern?: string;
}
