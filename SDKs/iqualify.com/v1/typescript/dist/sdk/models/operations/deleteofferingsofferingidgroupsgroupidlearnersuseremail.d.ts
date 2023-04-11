import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest extends SpeakeasyBase {
    /**
     * Assessment group id
     */
    groupId: string;
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
