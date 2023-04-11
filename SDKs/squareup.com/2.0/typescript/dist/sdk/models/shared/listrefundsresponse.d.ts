import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Refund } from "./refund";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [ListRefunds](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/list-refunds) endpoint.
 *
 * One of `errors` or `refunds` is present in a given response (never both).
 */
export declare class ListRefundsResponse extends SpeakeasyBase {
    /**
     * A pagination cursor for retrieving the next set of results,
     *
     * @remarks
     * if any remain. Provide this value as the `cursor` parameter in a subsequent
     * request to this endpoint.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * An array of refunds that match your query.
     */
    refunds?: Refund[];
}
