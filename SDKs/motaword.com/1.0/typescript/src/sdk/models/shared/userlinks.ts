import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class UserLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: Href;

  @SpeakeasyMetadata({ data: "json, name=responsivity" })
  responsivity?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: Href;
}
