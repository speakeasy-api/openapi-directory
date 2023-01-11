import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { Project } from "./project";



export class ProjectList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: Project })
  projects?: Project[];
}
