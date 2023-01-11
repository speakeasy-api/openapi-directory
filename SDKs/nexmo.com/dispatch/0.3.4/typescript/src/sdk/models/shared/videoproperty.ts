import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
