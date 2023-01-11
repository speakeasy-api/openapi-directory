import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FlexV1Assessments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
