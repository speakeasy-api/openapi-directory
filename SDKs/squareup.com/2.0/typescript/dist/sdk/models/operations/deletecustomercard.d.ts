import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomerCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteCustomerCardRequest extends SpeakeasyBase {
    /**
     * The ID of the card on file to delete.
     */
    cardId: string;
    /**
     * The ID of the customer that the card on file belongs to.
     */
    customerId: string;
}
export declare class DeleteCustomerCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCustomerCardResponse?: shared.DeleteCustomerCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
