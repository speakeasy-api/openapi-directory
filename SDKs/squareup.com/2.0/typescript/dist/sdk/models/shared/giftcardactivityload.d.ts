import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Present only when `GiftCardActivityType` is LOAD.
 */
export declare class GiftCardActivityLoad extends SpeakeasyBase {
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney?: Money;
    /**
     * If you are not using the Orders API, this field is required because it is used to identify a buyer
     *
     * @remarks
     * to perform compliance checks.
     */
    buyerPaymentInstrumentIds?: string[];
    /**
     * The `line_item_uid` of the gift card’s line item in the order associated with the activity.
     *
     * @remarks
     * It is populated along with `order_id` and is required if using the Square Orders API.
     */
    lineItemUid?: string;
    /**
     * The `order_id` of the order associated with the activity.
     *
     * @remarks
     * It is populated along with `line_item_uid` and is required if using the Square Orders API.
     */
    orderId?: string;
    /**
     * A client-specified ID to associate an entity, in another system, with this gift card
     *
     * @remarks
     * activity. This can be used to track the order or payment related information when the Square Orders
     * API is not being used.
     */
    referenceId?: string;
}
