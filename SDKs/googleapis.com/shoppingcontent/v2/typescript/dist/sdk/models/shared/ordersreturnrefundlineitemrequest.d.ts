import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersReturnRefundLineItemRequest extends SpeakeasyBase {
    amountPretax?: Price;
    amountTax?: Price;
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The quantity to return and refund. Quantity is required.
     */
    quantity?: number;
    /**
     * The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
}
