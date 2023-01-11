import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { PagingMeta } from "./pagingmeta";
export declare class CommentList extends SpeakeasyBase {
    activities?: Comment[];
    meta?: PagingMeta;
}
