import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { PaymentRefund } from "./paymentrefund";
/**
 * Defines the response returned by [ListPaymentRefunds](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/list-payment-refunds).
 *
 * @remarks
 *
 * Either `errors` or `refunds` is present in a given response (never both).
 */
export declare class ListPaymentRefundsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     *
     * @remarks
     * this is the final response.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The list of requested refunds.
     */
    refunds?: PaymentRefund[];
}
