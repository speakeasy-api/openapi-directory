import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { StyleGuide } from "./styleguide";



export class StyleGuideList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=styleguides", elemType: StyleGuide })
  styleguides?: StyleGuide[];
}
