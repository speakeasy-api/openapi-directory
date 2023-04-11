import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserEmailOfferingsOfferingIdProgressRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
/**
 * user's offerings
 */
export declare class GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSON extends SpeakeasyBase {
    completion?: string;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
}
export declare class GetUsersUserEmailOfferingsOfferingIdProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * user's offerings
     */
    getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject?: GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSON;
}
