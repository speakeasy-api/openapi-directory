import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CommentsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the comment you wish to retrieve.
     */
    commentId: string;
}
/**
 * The properties of the comment entity.
 */
export declare class CommentsReadCommentAttributes extends SpeakeasyBase {
    /**
     * Whether or not the current user has permission to edit this comment
     */
    canEdit?: boolean;
    /**
     * The content of the comment.
     */
    content?: string;
    /**
     * The time at which the comment was created, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * The time at which the comment was last modified, as an iso8601 formatted timestamp.
     */
    dateModified?: Date;
    /**
     * Whether or not the comment is deleted.
     */
    deleted?: boolean;
    /**
     * Whether or not the comment has replies.
     */
    hasChildren?: boolean;
    /**
     * Whether or not the comment the current user reported this as spam.
     */
    hasReport?: boolean;
    /**
     * Whether or not the comment is flagged or confirmed spam.
     */
    isAbuse?: boolean;
    /**
     * Whether or not an admin checked the legitimacy of this comment.
     */
    isHam?: boolean;
    /**
     * Whether or not the comment has been edited.
     */
    modified?: boolean;
    /**
     * The page type the comment is on, e.g. `node`, `registration`, `wiki`, `files`.
     */
    page?: string;
}
/**
 * URLs to alternative representations of the comment entity.
 */
export declare class CommentsReadCommentLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the comment.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the comment entity.
 */
export declare class CommentsReadCommentRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node the comment is on.
     */
    node?: string;
    /**
     * A relationship to the replies to the comment.
     */
    replies?: string;
    /**
     * A relationship to the reports connected to the comment.
     */
    reports?: string;
    /**
     * A relationship to the target of the comment.
     */
    target?: string;
    /**
     * A relationship to the user who created the comment.
     */
    user?: string;
}
/**
 * OK
 */
export declare class CommentsReadComment extends SpeakeasyBase {
    /**
     * The properties of the comment entity.
     */
    attributes?: CommentsReadCommentAttributes;
    /**
     * The identifier of the comment entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the comment entity.
     */
    links?: CommentsReadCommentLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the comment entity.
     */
    relationships?: CommentsReadCommentRelationships;
    /**
     * The type identifier of the comment entity (`comments`).
     */
    type?: string;
}
export declare class CommentsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
