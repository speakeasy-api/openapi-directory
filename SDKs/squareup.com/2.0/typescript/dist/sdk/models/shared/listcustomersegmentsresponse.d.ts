import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSegment } from "./customersegment";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body for requests to the `ListCustomerSegments` endpoint.
 *
 * @remarks
 *
 * Either `errors` or `segments` is present in a given response (never both).
 */
export declare class ListCustomerSegmentsResponse extends SpeakeasyBase {
    /**
     * A pagination cursor to be used in subsequent calls to `ListCustomerSegments`
     *
     * @remarks
     * to retrieve the next set of query results. The cursor is only present if the request succeeded and
     * additional results are available.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The list of customer segments belonging to the associated Square account.
     */
    segments?: CustomerSegment[];
}
