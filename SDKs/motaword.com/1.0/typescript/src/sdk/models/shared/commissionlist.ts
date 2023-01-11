import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commission } from "./commission";
import { PagingMeta } from "./pagingmeta";



export class CommissionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commissions", elemType: Commission })
  commissions?: Commission[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
