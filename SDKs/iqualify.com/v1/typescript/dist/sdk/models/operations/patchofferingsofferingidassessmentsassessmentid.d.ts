import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest extends SpeakeasyBase {
    assessment: shared.Assessment;
    /**
     * assessment's id
     */
    assessmentId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse extends SpeakeasyBase {
    /**
     * assessment successfully updated
     */
    assessmentResponse?: shared.AssessmentResponse;
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
