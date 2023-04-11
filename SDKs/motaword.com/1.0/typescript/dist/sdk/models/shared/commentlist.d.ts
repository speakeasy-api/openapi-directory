import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { PagingMeta } from "./pagingmeta";
/**
 * A list of Comment models
 */
export declare class CommentList extends SpeakeasyBase {
    activities?: Comment[];
    meta?: PagingMeta;
}
