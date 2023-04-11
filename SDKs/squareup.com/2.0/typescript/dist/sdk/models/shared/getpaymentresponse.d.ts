import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Payment } from "./payment";
/**
 * Defines the response returned by [GetPayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/get-payment).
 */
export declare class GetPaymentResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a payment processed by the Square API.
     */
    payment?: Payment;
}
