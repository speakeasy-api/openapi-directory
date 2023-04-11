import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A decision that has been made to dismiss an approval request.
 */
export declare class DismissDecision extends SpeakeasyBase {
    /**
     * The time at which the approval request was dismissed.
     */
    dismissTime?: string;
    /**
     * This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).
     */
    implicit?: boolean;
}
