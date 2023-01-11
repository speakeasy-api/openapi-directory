import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AudioProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
