import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse extends SpeakeasyBase {
    /**
     * user open response submission and mark details
     */
    assignments?: shared.Assignments[];
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
