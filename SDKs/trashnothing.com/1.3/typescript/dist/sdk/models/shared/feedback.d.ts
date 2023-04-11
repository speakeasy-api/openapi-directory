import { SpeakeasyBase } from "../../../internal/utils";
export declare class Feedback extends SpeakeasyBase {
    /**
     * A comment written by the reviewer about the user (may be null).
     */
    content?: string;
    /**
     * Date when the feedback was submitted.
     */
    date?: Date;
    feedbackId?: string;
    /**
     * Set to true for positive feedback and false for negative feedback.
     */
    positive?: boolean;
    /**
     * The user ID of the user that submitted the feedback.
     */
    reviewerUserId?: string;
    /**
     * The user ID of the user that the feedback is about.
     */
    userId?: string;
}
