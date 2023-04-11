import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Transaction } from "./transaction";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge) endpoint.
 *
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export declare class ChargeResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a transaction processed with Square, either with the
     *
     * @remarks
     * Connect API or with Square Point of Sale.
     *
     * The `tenders` field of this object lists all methods of payment used to pay in
     * the transaction.
     */
    transaction?: Transaction;
}
