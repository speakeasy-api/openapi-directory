import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
import { Author } from "./author";
/**
 * Represents a single question and some of its answers.
 */
export declare class Question extends SpeakeasyBase {
    /**
     * Represents the author of a question or answer
     */
    author?: Author;
    /**
     * Output only. The timestamp for when the question was written.
     */
    createTime?: string;
    /**
     * Output only. The unique name for the question. accounts/* /locations/* /questions/*
     */
    name?: string;
    /**
     * The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.
     */
    text?: string;
    /**
     * Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)
     */
    topAnswers?: Answer[];
    /**
     * Output only. The total number of answers posted for this question.
     */
    totalAnswerCount?: number;
    /**
     * Output only. The timestamp for when the question was last modified.
     */
    updateTime?: string;
    /**
     * Output only. The number of upvotes for the question.
     */
    upvoteCount?: number;
}
