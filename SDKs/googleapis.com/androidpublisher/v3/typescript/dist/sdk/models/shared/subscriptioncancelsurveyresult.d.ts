import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
 */
export declare class SubscriptionCancelSurveyResult extends SpeakeasyBase {
    /**
     * The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app
     */
    cancelSurveyReason?: number;
    /**
     * The customized input cancel reason from the user. Only present when cancelReason is 0.
     */
    userInputCancelReason?: string;
}
