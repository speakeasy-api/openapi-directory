import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
    requestBody: PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;
    /**
     * Assessment group id
     */
    groupId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
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
    userResponse?: shared.UserResponse;
}
