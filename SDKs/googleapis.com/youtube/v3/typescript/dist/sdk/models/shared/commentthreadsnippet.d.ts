import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * Basic details about a comment thread.
 */
export declare class CommentThreadSnippet extends SpeakeasyBase {
    /**
     * Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.
     */
    canReply?: boolean;
    /**
     * The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself.
     */
    channelId?: string;
    /**
     * Whether the thread (and therefore all its comments) is visible to all YouTube users.
     */
    isPublic?: boolean;
    /**
     * A *comment* represents a single YouTube comment.
     */
    topLevelComment?: Comment;
    /**
     * The total number of replies (not including the top level comment).
     */
    totalReplyCount?: number;
    /**
     * The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.
     */
    videoId?: string;
}
