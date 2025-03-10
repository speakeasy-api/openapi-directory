import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
    /**
     * Succesful response
     */
    assessmentGroupResponses?: shared.AssessmentGroupResponse[];
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
