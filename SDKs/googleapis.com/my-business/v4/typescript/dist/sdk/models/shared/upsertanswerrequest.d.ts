import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * Request message for QuestionsAndAnswers.UpsertAnswer
 */
export declare class UpsertAnswerRequest extends SpeakeasyBase {
    /**
     * Represents an answer to a question
     */
    answer?: Answer;
}
