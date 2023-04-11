import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the feedback.
 */
export declare enum AlertFeedbackTypeEnum {
    AlertFeedbackTypeUnspecified = "ALERT_FEEDBACK_TYPE_UNSPECIFIED",
    NotUseful = "NOT_USEFUL",
    SomewhatUseful = "SOMEWHAT_USEFUL",
    VeryUseful = "VERY_USEFUL"
}
/**
 * A customer feedback about an alert.
 */
export declare class AlertFeedback extends SpeakeasyBase {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string;
    /**
     * Output only. The time this feedback was created.
     */
    createTime?: string;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string;
    /**
     * Output only. The email of the user that provided the feedback.
     */
    email?: string;
    /**
     * Output only. The unique identifier for the feedback.
     */
    feedbackId?: string;
    /**
     * Required. The type of the feedback.
     */
    type?: AlertFeedbackTypeEnum;
}
