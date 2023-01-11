import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { StringWithTranslations } from "./stringwithtranslations";



export class StringList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: StringWithTranslations })
  translations?: StringWithTranslations[];
}
