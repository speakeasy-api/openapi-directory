import { SpeakeasyBase } from "../../../internal/utils";
import { ExtraMaterial } from "./extramaterial";
/**
 * Feedback for a respondent about their response to a question.
 */
export declare class Feedback extends SpeakeasyBase {
    /**
     * Additional information provided as part of the feedback, often used to point the respondent to more reading and resources.
     */
    material?: ExtraMaterial[];
    /**
     * Required. The main text of the feedback.
     */
    text?: string;
}
