import { SpeakeasyBase } from "../../../internal/utils";
import { CommentThreadReplies } from "./commentthreadreplies";
import { CommentThreadSnippet } from "./commentthreadsnippet";
/**
 * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
 */
export declare class CommentThread extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the comment thread.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".
     */
    kind?: string;
    /**
     * Comments written in (direct or indirect) reply to the top level comment.
     */
    replies?: CommentThreadReplies;
    /**
     * Basic details about a comment thread.
     */
    snippet?: CommentThreadSnippet;
}
