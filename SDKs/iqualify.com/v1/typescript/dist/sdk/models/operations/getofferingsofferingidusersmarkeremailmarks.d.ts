import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
    /**
     * marker's email
     */
    markerEmail: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * learners marked by the marker
     */
    offeringUsers?: shared.OfferingUser[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
