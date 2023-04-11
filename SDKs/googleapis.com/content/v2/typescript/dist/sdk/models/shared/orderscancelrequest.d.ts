import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersCancelRequest extends SpeakeasyBase {
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
}
