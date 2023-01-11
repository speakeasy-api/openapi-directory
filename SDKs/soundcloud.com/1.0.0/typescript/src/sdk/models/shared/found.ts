import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Found extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
