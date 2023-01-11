import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class RegeneratePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Href;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
