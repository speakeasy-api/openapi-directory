import { SpeakeasyBase } from "../../../internal/utils";
import { Actor, ActorInput } from "./actor";
/**
 * A comment associated with a support case.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * The full comment body. Maximum of 12800 characters. This can contain rich text syntax.
     */
    body?: string;
    /**
     * Output only. The time when this comment was created.
     */
    createTime?: string;
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: Actor;
    /**
     * Output only. The resource name for the comment.
     */
    name?: string;
    /**
     * Output only. An automatically generated plain text version of body with all rich text syntax stripped.
     */
    plainTextBody?: string;
}
/**
 * A comment associated with a support case.
 */
export declare class CommentInput extends SpeakeasyBase {
    /**
     * The full comment body. Maximum of 12800 characters. This can contain rich text syntax.
     */
    body?: string;
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     */
    creator?: ActorInput;
}
