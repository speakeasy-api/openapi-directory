import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";



export class PermissionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
