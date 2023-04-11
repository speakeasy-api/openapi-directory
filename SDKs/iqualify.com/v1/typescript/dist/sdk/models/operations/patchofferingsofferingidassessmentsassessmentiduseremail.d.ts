import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody extends SpeakeasyBase {
    dueDate?: Date;
}
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest extends SpeakeasyBase {
    requestBody: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
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
export declare class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
