import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest extends SpeakeasyBase {
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
export declare class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
