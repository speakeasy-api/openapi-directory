import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingLinksMeta } from "./paginglinksmeta";



export class PagingMetaPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PagingLinksMeta;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount?: number;
}


export class PagingMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: PagingMetaPaging;
}
