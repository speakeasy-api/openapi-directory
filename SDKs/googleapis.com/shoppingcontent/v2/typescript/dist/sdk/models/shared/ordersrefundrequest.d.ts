import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrdersRefundRequest extends SpeakeasyBase {
    amount?: Price;
    amountPretax?: Price;
    amountTax?: Price;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`"
     */
    reason?: string;
    /**
     * The explanation of the reason.
     */
    reasonText?: string;
}
