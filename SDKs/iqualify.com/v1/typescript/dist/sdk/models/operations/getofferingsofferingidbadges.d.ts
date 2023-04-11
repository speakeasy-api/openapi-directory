import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdBadgesRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdBadgesResponse extends SpeakeasyBase {
    /**
     * badges
     */
    badge?: shared.Badge;
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
