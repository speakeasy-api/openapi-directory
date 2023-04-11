import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse extends SpeakeasyBase {
    /**
     * Awarded badge response
     */
    awardedResponse?: shared.AwardedResponse;
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
