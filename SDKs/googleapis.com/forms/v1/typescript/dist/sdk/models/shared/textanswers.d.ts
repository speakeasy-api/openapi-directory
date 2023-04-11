import { SpeakeasyBase } from "../../../internal/utils";
import { TextAnswer } from "./textanswer";
/**
 * A question's answers as text.
 */
export declare class TextAnswers extends SpeakeasyBase {
    /**
     * Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value.
     */
    answers?: TextAnswer[];
}
