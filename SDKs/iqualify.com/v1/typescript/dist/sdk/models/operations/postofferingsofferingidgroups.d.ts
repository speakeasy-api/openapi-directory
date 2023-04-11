import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
    assessmentGroupRequired: shared.AssessmentGroupRequired;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
    /**
     * assessment group successfully added
     */
    assessmentGroupResponse?: shared.AssessmentGroupResponse;
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
