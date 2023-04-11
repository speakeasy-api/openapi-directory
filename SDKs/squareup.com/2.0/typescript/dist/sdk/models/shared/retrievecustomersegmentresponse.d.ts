import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSegment } from "./customersegment";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body for requests to the `RetrieveCustomerSegment` endpoint.
 *
 * @remarks
 *
 * Either `errors` or `segment` is present in a given response (never both).
 */
export declare class RetrieveCustomerSegmentResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a group of customer profiles that match one or more predefined filter criteria.
     *
     * @remarks
     *
     * Segments (also known as Smart Groups) are defined and created within the Customer Directory in the
     * Square Seller Dashboard or Point of Sale.
     */
    segment?: CustomerSegment;
}
