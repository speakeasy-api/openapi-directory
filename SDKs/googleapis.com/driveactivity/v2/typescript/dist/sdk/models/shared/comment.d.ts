import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Post } from "./post";
import { Suggestion } from "./suggestion";
import { User } from "./user";
/**
 * A change about comments on an object.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * A comment with an assignment.
     */
    assignment?: Assignment;
    /**
     * Users who are mentioned in this comment.
     */
    mentionedUsers?: User[];
    /**
     * A regular posted comment.
     */
    post?: Post;
    /**
     * A suggestion.
     */
    suggestion?: Suggestion;
}
