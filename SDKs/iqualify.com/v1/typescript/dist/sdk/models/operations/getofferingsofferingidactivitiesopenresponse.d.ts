import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdActivitiesOpenresponseRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdActivitiesOpenresponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * offering's learners
     */
    offeringActivitiesResponses?: shared.OfferingActivitiesResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
