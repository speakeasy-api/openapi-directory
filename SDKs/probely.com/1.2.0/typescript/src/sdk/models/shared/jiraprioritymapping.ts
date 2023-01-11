import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JiraPriorityMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=10" })
  ten?: string;

  @SpeakeasyMetadata({ data: "json, name=20" })
  twenty?: string;

  @SpeakeasyMetadata({ data: "json, name=30" })
  thirty?: string;
}
