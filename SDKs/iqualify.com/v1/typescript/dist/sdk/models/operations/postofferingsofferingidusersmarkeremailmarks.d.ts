import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
    /**
     * array of learners e-mails
     */
    requestBody: string[];
    /**
     * marker's email
     */
    markerEmail: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * learners marked by the marker
     */
    offeringUsers?: shared.OfferingUser[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
