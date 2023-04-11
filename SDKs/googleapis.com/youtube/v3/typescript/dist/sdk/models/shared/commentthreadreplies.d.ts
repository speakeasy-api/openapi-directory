import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Comments written in (direct or indirect) reply to the top level comment.
 */
export declare class CommentThreadReplies extends SpeakeasyBase {
    /**
     * A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.
     */
    comments?: Comment[];
}
