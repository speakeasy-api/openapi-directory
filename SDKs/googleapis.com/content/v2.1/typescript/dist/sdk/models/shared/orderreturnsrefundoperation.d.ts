import { SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsPartialRefund } from "./orderreturnspartialrefund";
export declare class OrderreturnsRefundOperation extends SpeakeasyBase {
    /**
     * If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer through FOP.
     */
    fullRefund?: boolean;
    partialRefund?: OrderreturnsPartialRefund;
    /**
     * The payment way of issuing refund. Default value is ORIGINAL_FOP if not set.
     */
    paymentType?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
    /**
     * Code of the refund reason.
     */
    returnRefundReason?: string;
}
