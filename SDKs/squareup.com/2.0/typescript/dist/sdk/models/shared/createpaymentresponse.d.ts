import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Payment } from "./payment";
/**
 * Defines the response returned by [CreatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
 *
 * @remarks
 *
 * If there are errors processing the request, the `payment` field might not be
 * present, or it might be present with a status of `FAILED`.
 */
export declare class CreatePaymentResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a payment processed by the Square API.
     */
    payment?: Payment;
}
