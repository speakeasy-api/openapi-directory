import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Refund } from "./refund";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
 *
 * One of `errors` or `refund` is present in a given response (never both).
 */
export declare class CreateRefundResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a refund processed for a Square transaction.
     */
    refund?: Refund;
}
