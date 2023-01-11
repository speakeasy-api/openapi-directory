import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class ProgressLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;
}
