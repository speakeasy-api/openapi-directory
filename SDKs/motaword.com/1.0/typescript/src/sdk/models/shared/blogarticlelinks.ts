import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Href } from "./href";



export class BlogArticleLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=android" })
  android?: Href;

  @SpeakeasyMetadata({ data: "json, name=header_image" })
  headerImage?: Href;

  @SpeakeasyMetadata({ data: "json, name=ios" })
  ios?: Href;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Href;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: Href;
}
