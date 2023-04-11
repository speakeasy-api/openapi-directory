import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * Quizzes marks
     */
    quizMarkResponses?: shared.QuizMarkResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
