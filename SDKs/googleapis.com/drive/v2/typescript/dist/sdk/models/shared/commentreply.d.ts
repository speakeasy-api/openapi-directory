import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A comment on a file in Google Drive.
 */
export declare class CommentReply extends SpeakeasyBase {
    /**
     * Information about a Drive user.
     */
    author?: User;
    /**
     * The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen).
     */
    content?: string;
    /**
     * The date when this reply was first created.
     */
    createdDate?: Date;
    /**
     * Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
     */
    deleted?: boolean;
    /**
     * HTML formatted content for this reply.
     */
    htmlContent?: string;
    /**
     * This is always drive#commentReply.
     */
    kind?: string;
    /**
     * The date when this reply was last modified.
     */
    modifiedDate?: Date;
    /**
     * The ID of the reply.
     */
    replyId?: string;
    /**
     * The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:
     *
     * @remarks
     * - "resolve" - To resolve a comment.
     * - "reopen" - To reopen (un-resolve) a comment.
     */
    verb?: string;
}
