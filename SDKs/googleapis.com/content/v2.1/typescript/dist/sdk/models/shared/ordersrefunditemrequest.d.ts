import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryRefundItemItem } from "./orderscustombatchrequestentryrefunditemitem";
import { OrdersCustomBatchRequestEntryRefundItemShipping } from "./orderscustombatchrequestentryrefunditemshipping";
export declare class OrdersRefundItemRequest extends SpeakeasyBase {
    /**
     * The items that are refunded. Either Item or Shipping must be provided in the request.
     */
    items?: OrdersCustomBatchRequestEntryRefundItemItem[];
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The reason for the refund. Acceptable values are: - "`shippingCostAdjustment`" - "`priceAdjustment`" - "`taxAdjustment`" - "`feeAdjustment`" - "`courtesyAdjustment`" - "`adjustment`" - "`customerCancelled`" - "`noInventory`" - "`productNotAsDescribed`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" - "`lateShipmentCredit`" - "`deliveredLateByCarrier`" - "`productArrivedDamaged`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
    shipping?: OrdersCustomBatchRequestEntryRefundItemShipping;
}
