import { SpeakeasyBase } from "../../../internal/utils";
import { CorrectAnswer } from "./correctanswer";
/**
 * The answer key for a question.
 */
export declare class CorrectAnswers extends SpeakeasyBase {
    /**
     * A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (`CHECKBOX`) questions, a response is marked correct if it contains exactly the values in this list.
     */
    answers?: CorrectAnswer[];
}
