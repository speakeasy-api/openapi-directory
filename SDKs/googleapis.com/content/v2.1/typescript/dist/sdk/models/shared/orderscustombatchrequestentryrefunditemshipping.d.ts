import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersCustomBatchRequestEntryRefundItemShipping extends SpeakeasyBase {
    amount?: Price;
    /**
     * If set to true, all shipping costs for the order will be refunded. If this is true, amount shouldn't be provided and will be ignored. If set to false, submit the amount of the partial shipping refund, excluding the shipping tax. The shipping tax is calculated and handled on Google's side.
     */
    fullRefund?: boolean;
}
