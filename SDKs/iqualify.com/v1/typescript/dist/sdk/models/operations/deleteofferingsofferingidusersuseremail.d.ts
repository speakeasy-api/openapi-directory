import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOfferingsOfferingIdUsersUserEmailRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class DeleteOfferingsOfferingIdUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
