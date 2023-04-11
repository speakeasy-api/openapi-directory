import { SpeakeasyBase } from "../../../internal/utils";
import { Feedback } from "./feedback";
/**
 * Grade information associated with a respondent's answer to a question.
 */
export declare class Grade extends SpeakeasyBase {
    /**
     * Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points.
     */
    correct?: boolean;
    /**
     * Feedback for a respondent about their response to a question.
     */
    feedback?: Feedback;
    /**
     * Output only. The numeric score awarded for the answer.
     */
    score?: number;
}
