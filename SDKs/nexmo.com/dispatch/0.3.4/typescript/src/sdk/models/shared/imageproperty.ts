import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
