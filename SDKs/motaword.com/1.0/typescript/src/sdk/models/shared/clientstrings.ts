import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { ClientStringWithTranslations } from "./clientstringwithtranslations";



export class ClientStrings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=strings", elemType: ClientStringWithTranslations })
  strings?: ClientStringWithTranslations[];
}
