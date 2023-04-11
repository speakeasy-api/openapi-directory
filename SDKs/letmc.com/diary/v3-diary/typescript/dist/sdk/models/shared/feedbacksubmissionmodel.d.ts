import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Feedback Submission Model:-
 */
export declare class FeedbackSubmissionModel extends SpeakeasyBase {
    /**
     * Appointment to submit feedback to:-
     */
    appointmentID?: string;
    /**
     * Feedback to submit:-
     */
    feedback?: string;
    /**
     * Property to submit feedback to:-
     */
    propertyID?: string;
}
