import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
/**
 * Describes a request to update a payment using
 *
 * @remarks
 * [UpdatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/update-payment).
 */
export declare class UpdatePaymentRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `UpdatePayment` request. Keys can be any valid string
     *
     * @remarks
     * but must be unique for every `UpdatePayment` request.
     *
     * The maximum is 45 characters.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).
     */
    idempotencyKey: string;
    /**
     * Represents a payment processed by the Square API.
     */
    payment?: Payment;
}
