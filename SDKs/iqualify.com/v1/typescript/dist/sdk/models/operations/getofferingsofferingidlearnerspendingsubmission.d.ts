import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionRequest extends SpeakeasyBase {
    /**
     * days to assessment due date. Default is 3 days
     */
    days?: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdLearnersPendingSubmissionResponse extends SpeakeasyBase {
    /**
     * offering's learners
     */
    assessmentPendingSubmissions?: shared.AssessmentPendingSubmission[];
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
