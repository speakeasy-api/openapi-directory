import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Defines the fields that are included in requests to the
 *
 * @remarks
 * [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.
 */
export declare class UpdateOrderRequest extends SpeakeasyBase {
    /**
     * The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
     *
     * @remarks
     * fields to clear. For example, `line_items[uid].note`.
     * For more information, see [Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders#delete-fields).
     */
    fieldsToClear?: string[];
    /**
     * A value you specify that uniquely identifies this update request.
     *
     * @remarks
     *
     * If you are unsure whether a particular update was applied to an order successfully,
     * you can reattempt it with the same idempotency key without
     * worrying about creating duplicate updates to the order.
     * The latest order version is returned.
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
