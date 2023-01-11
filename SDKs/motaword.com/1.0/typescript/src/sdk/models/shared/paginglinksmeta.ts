import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class PagingLinksMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;
}
