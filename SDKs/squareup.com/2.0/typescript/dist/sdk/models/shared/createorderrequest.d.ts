import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CreateOrderRequest extends SpeakeasyBase {
    /**
     * A value you specify that uniquely identifies this
     *
     * @remarks
     * order among orders you have created.
     *
     * If you are unsure whether a particular order was created successfully,
     * you can try it again with the same idempotency key without
     * worrying about creating duplicate orders.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency).
     */
    idempotencyKey?: string;
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
