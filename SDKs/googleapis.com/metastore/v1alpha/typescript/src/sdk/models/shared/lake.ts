import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Lake extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
