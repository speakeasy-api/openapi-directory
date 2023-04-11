import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * A form response.
 */
export declare class FormResponse extends SpeakeasyBase {
    /**
     * Output only. The actual answers to the questions, keyed by question_id.
     */
    answers?: Record<string, Answer>;
    /**
     * Output only. Timestamp for the first time the response was submitted.
     */
    createTime?: string;
    /**
     * Output only. The form ID.
     */
    formId?: string;
    /**
     * Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades.
     */
    lastSubmittedTime?: string;
    /**
     * Output only. The email address (if collected) for the respondent.
     */
    respondentEmail?: string;
    /**
     * Output only. The response ID.
     */
    responseId?: string;
    /**
     * Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner.
     */
    totalScore?: number;
}
