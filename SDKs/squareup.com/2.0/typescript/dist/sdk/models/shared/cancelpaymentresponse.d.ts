import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Payment } from "./payment";
/**
 * Defines the response returned by [CancelPayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment).
 */
export declare class CancelPaymentResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a payment processed by the Square API.
     */
    payment?: Payment;
}
