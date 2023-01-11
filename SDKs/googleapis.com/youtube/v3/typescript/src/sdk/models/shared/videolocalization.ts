import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoLocalization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
