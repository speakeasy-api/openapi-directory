import { SpeakeasyBase } from "../../../internal/utils";
import { CommentReply } from "./commentreply";
import { User } from "./user";
/**
 * The context of the file which is being commented on.
 */
export declare class CommentContext extends SpeakeasyBase {
    /**
     * The MIME type of the context snippet.
     */
    type?: string;
    /**
     * Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about.
     */
    value?: string;
}
/**
 * A comment on a file in Google Drive.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * A region of the document represented as a JSON string. For details on defining anchor properties, refer to  Add comments and replies.
     */
    anchor?: string;
    /**
     * Information about a Drive user.
     */
    author?: User;
    /**
     * The ID of the comment.
     */
    commentId?: string;
    /**
     * The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.
     */
    content?: string;
    /**
     * The context of the file which is being commented on.
     */
    context?: CommentContext;
    /**
     * The date when this comment was first created.
     */
    createdDate?: Date;
    /**
     * Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
     */
    deleted?: boolean;
    /**
     * The file which this comment is addressing.
     */
    fileId?: string;
    /**
     * The title of the file which this comment is addressing.
     */
    fileTitle?: string;
    /**
     * HTML formatted content for this comment.
     */
    htmlContent?: string;
    /**
     * This is always drive#comment.
     */
    kind?: string;
    /**
     * The date when this comment or any of its replies were last modified.
     */
    modifiedDate?: Date;
    /**
     * Replies to this post.
     */
    replies?: CommentReply[];
    /**
     * A link back to this comment.
     */
    selfLink?: string;
    /**
     * The status of this comment. Status can be changed by posting a reply to a comment with the desired status.
     *
     * @remarks
     * - "open" - The comment is still open.
     * - "resolved" - The comment has been resolved by one of its replies.
     */
    status?: string;
}
