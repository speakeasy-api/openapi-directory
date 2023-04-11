import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse extends SpeakeasyBase {
    /**
     * Assignments submissions
     */
    assignmentMarkResponses?: shared.AssignmentMarkResponse[];
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
