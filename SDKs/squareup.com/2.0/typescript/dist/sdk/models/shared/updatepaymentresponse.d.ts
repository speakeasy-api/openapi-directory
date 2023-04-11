import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Payment } from "./payment";
/**
 * Defines the response returned by
 *
 * @remarks
 * [UpdatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/update-payment).
 */
export declare class UpdatePaymentResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a payment processed by the Square API.
     */
    payment?: Payment;
}
