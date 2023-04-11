import { SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `ListCustomers` endpoint.
 *
 * Either `errors` or `customers` is present in a given response (never both).
 */
export declare class ListCustomersResponse extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for the
     *
     * @remarks
     * original query. A cursor is only present if the request succeeded and additional results
     * are available.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * An array of `Customer` objects that match the provided query.
     */
    customers?: Customer[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
