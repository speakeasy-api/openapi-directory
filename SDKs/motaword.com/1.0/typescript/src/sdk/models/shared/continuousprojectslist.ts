import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { ContinuousProject } from "./continuousproject";



export class ContinuousProjectsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ContinuousProject })
  projects?: ContinuousProject[];
}
