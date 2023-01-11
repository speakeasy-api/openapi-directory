import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentInSearch } from "./documentinsearch";
import { ProjectInSearch } from "./projectinsearch";
import { StringInSearch } from "./stringinsearch";
import { PagingMeta } from "./pagingmeta";



export class SearchEverywhereResultResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: DocumentInSearch })
  documents?: DocumentInSearch[];

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectInSearch })
  projects?: ProjectInSearch[];

  @SpeakeasyMetadata({ data: "json, name=strings", elemType: StringInSearch })
  strings?: StringInSearch[];
}


export class SearchEverywhereResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: SearchEverywhereResultResult;
}
