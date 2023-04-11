import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Order } from "./order";
/**
 * Success
 */
export declare class CalculateOrderResponse extends SpeakeasyBase {
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
