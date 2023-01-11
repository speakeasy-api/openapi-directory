import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProgressSub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=proofreading" })
  proofreading?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=translation" })
  translation?: number;
}
