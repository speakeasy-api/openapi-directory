import { SpeakeasyBase } from "../../../internal/utils";
import { Reply } from "./reply";
import { User } from "./user";
/**
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
 */
export declare class CommentQuotedFileContent extends SpeakeasyBase {
    /**
     * The MIME type of the quoted content.
     */
    mimeType?: string;
    /**
     * The quoted content itself. This is interpreted as plain text if set through the API.
     */
    value?: string;
}
/**
 * A comment on a file.
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
     * The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.
     */
    content?: string;
    /**
     * The time at which the comment was created (RFC 3339 date-time).
     */
    createdTime?: Date;
    /**
     * Whether the comment has been deleted. A deleted comment has no content.
     */
    deleted?: boolean;
    /**
     * The content of the comment with HTML formatting.
     */
    htmlContent?: string;
    /**
     * The ID of the comment.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#comment".
     */
    kind?: string;
    /**
     * The last time the comment or any of its replies was modified (RFC 3339 date-time).
     */
    modifiedTime?: Date;
    /**
     * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
     */
    quotedFileContent?: CommentQuotedFileContent;
    /**
     * The full list of replies to the comment in chronological order.
     */
    replies?: Reply[];
    /**
     * Whether the comment has been resolved by one of its replies.
     */
    resolved?: boolean;
}
