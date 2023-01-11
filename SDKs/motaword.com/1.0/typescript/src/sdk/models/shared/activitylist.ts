import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { PagingMeta } from "./pagingmeta";



export class ActivityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: Activity })
  activities?: Activity[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
