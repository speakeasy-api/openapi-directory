import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    requestBody: shared.OfferingUser[];
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PostOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * user successfully added to the offering
     */
    offeringUserAddResponses?: shared.OfferingUserAddResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Partially successful response
     */
    postOfferingsOfferingIdUsers207ApplicationJSONOneoves?: any[];
}
