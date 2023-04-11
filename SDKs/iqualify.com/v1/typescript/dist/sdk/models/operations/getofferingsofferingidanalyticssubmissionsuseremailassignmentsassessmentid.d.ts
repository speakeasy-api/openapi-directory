import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest extends SpeakeasyBase {
    /**
     * assessment's id
     */
    assessmentId: string;
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Responds with the learner's assessment submission and any marks for the submission.
     */
    submissionMarkResponses?: shared.SubmissionMarkResponse[];
}
