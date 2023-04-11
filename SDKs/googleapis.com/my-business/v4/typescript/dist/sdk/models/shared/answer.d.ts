import { SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
/**
 * Represents an answer to a question
 */
export declare class Answer extends SpeakeasyBase {
    /**
     * Represents the author of a question or answer
     */
    author?: Author;
    /**
     * Output only. The timestamp for when the answer was written.
     */
    createTime?: string;
    /**
     * Output only. The unique name for the answer accounts/* /locations/* /questions/* /answers/*
     */
    name?: string;
    /**
     * The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.
     */
    text?: string;
    /**
     * Output only. The timestamp for when the answer was last modified.
     */
    updateTime?: string;
    /**
     * Output only. The number of upvotes for the answer.
     */
    upvoteCount?: number;
}
