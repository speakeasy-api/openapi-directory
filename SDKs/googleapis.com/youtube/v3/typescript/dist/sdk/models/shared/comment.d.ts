import { SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippet } from "./commentsnippet";
/**
 * A *comment* represents a single YouTube comment.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the comment.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#comment".
     */
    kind?: string;
    /**
     * Basic details about a comment, such as its author and text.
     */
    snippet?: CommentSnippet;
}
