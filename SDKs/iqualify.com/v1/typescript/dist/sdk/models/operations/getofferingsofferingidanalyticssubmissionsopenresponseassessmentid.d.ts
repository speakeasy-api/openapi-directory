import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest extends SpeakeasyBase {
    /**
     * assessment's id
     */
    assessmentId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Responds with assignment submissions for the specified assignment.
     */
    submissionMarkResponses?: shared.SubmissionMarkResponse[];
}
