import { SpeakeasyBase } from "../../../internal/utils";
import { CorrectAnswers } from "./correctanswers";
import { Feedback } from "./feedback";
/**
 * Grading for a single question
 */
export declare class Grading extends SpeakeasyBase {
    /**
     * The answer key for a question.
     */
    correctAnswers?: CorrectAnswers;
    /**
     * Feedback for a respondent about their response to a question.
     */
    generalFeedback?: Feedback;
    /**
     * Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative.
     */
    pointValue?: number;
    /**
     * Feedback for a respondent about their response to a question.
     */
    whenRight?: Feedback;
    /**
     * Feedback for a respondent about their response to a question.
     */
    whenWrong?: Feedback;
}
