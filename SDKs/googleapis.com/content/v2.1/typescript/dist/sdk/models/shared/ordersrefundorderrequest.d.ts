import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
export declare class OrdersRefundOrderRequest extends SpeakeasyBase {
    amount?: MonetaryAmount;
    /**
     * If true, the full order will be refunded, including shipping. If this is true, amount shouldn't be provided and will be ignored.
     */
    fullRefund?: boolean;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The reason for the refund. Acceptable values are: - "`courtesyAdjustment`" - "`other`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
}
