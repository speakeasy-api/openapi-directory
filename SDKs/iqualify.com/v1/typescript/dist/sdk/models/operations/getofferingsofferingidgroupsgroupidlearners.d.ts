import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
    /**
     * Assessment group id
     */
    groupId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Succesful response
     */
    userResponses?: shared.UserResponse[];
}
