import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { PagingMeta } from "./pagingmeta";



export class DocumentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: Document })
  documents?: Document[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
