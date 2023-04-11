import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Payment } from "./payment";
/**
 * Defines the response returned by [ListPayments](https://developer.squareup.com/reference/square_2021-08-18/payments-api/list-payments).
 */
export declare class ListPaymentsResponse extends SpeakeasyBase {
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
     * The requested list of payments.
     */
    payments?: Payment[];
}
