import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudRecaptchaenterpriseV1ScoreDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scoreBuckets" })
  scoreBuckets?: Record<string, string>;
}
