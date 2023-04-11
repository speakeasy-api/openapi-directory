import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersCustomBatchRequestEntryReturnLineItem extends SpeakeasyBase {
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The quantity to return.
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
