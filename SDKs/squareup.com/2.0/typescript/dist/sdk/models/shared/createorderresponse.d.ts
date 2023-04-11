import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Order } from "./order";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the `CreateOrder` endpoint.
 *
 * Either `errors` or `order` is present in a given response, but never both.
 */
export declare class CreateOrderResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Contains all information related to a single order to process with Square,
     *
     * @remarks
     * including line items that specify the products to purchase. `Order` objects also
     * include information about any associated tenders, refunds, and returns.
     *
     * All Connect V2 Transactions have all been converted to Orders including all associated
     * itemization data.
     */
    order?: Order;
}
