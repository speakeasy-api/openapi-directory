import { SpeakeasyBase } from "../../../internal/utils";
import { AlertFeedback } from "./alertfeedback";
/**
 * Response message for an alert feedback listing request.
 */
export declare class ListAlertFeedbackResponse extends SpeakeasyBase {
    /**
     * The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.
     */
    feedback?: AlertFeedback[];
}
