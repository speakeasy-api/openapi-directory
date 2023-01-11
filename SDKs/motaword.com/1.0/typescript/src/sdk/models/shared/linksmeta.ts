import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class LinksMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;
}
