import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class OrdersCustomBatchRequestEntryRefundItemItem extends SpeakeasyBase {
    amount?: MonetaryAmount;
    /**
     * If true, the full item will be refunded. If this is true, amount shouldn't be provided and will be ignored.
     */
    fullRefund?: boolean;
    /**
     * The ID of the line item. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The number of products that are refunded.
     */
    quantity?: number;
}
