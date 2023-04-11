import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest extends SpeakeasyBase {
    /**
     * assessment's id
     */
    assessmentId: string;
    /**
     * documents's id
     */
    documentId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
