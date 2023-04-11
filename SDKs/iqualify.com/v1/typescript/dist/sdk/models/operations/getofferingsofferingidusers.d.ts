import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * If true, facilitators are included in the results.
 */
export declare enum GetOfferingsOfferingIdUsersFacilitatorsEnum {
    True = "true",
    False = "false"
}
/**
 * If true, learners are included in the results.
 */
export declare enum GetOfferingsOfferingIdUsersLearnersEnum {
    True = "true",
    False = "false"
}
/**
 * If true, markers are included in the results.
 */
export declare enum GetOfferingsOfferingIdUsersMarkersEnum {
    True = "true",
    False = "false"
}
export declare class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    /**
     * If true, facilitators are included in the results.
     */
    facilitators?: GetOfferingsOfferingIdUsersFacilitatorsEnum;
    /**
     * If true, learners are included in the results.
     */
    learners?: GetOfferingsOfferingIdUsersLearnersEnum;
    /**
     * If true, markers are included in the results.
     */
    markers?: GetOfferingsOfferingIdUsersMarkersEnum;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * offering's users
     */
    offeringUserResponses?: shared.OfferingUserResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
