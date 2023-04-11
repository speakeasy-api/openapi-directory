import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomerCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateCustomerCardRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    createCustomerCardRequest: shared.CreateCustomerCardRequest;
    /**
     * The Square ID of the customer profile the card is linked to.
     */
    customerId: string;
}
export declare class CreateCustomerCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCustomerCardResponse?: shared.CreateCustomerCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
