import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { ActiveWidget } from "./activewidget";



export class ActiveWidgetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: ActiveWidget })
  widgets?: ActiveWidget[];
}
