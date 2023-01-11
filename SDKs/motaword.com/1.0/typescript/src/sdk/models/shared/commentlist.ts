import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { PagingMeta } from "./pagingmeta";



export class CommentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: Comment })
  activities?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
