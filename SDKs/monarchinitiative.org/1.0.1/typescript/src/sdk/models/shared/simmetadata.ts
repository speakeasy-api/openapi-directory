import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SimMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max_max_ic" })
  maxMaxIc?: number;
}
