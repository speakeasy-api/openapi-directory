import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAssessmentsRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAssessmentsResponse extends SpeakeasyBase {
    /**
     * offering's assessments
     */
    assessmentResponses?: shared.AssessmentResponse[];
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
