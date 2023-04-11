import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSurveyResult } from "./cancelsurveyresult";
/**
 * Information specific to cancellations initiated by users.
 */
export declare class UserInitiatedCancellation extends SpeakeasyBase {
    /**
     * Result of the cancel survey when the subscription was canceled by the user.
     */
    cancelSurveyResult?: CancelSurveyResult;
    /**
     * The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access.
     */
    cancelTime?: string;
}
