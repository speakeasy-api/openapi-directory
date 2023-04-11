import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { MerchantRejectionReason } from "./merchantrejectionreason";
import { MonetaryAmount } from "./monetaryamount";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { RefundReason } from "./refundreason";
export declare class MerchantOrderReturnItem extends SpeakeasyBase {
    customerReturnReason?: CustomerReturnReason;
    /**
     * Product level item ID. If the returned items are of the same product, they will have the same ID.
     */
    itemId?: string;
    merchantRejectionReason?: MerchantRejectionReason;
    merchantReturnReason?: RefundReason;
    product?: OrderLineItemProduct;
    refundableAmount?: MonetaryAmount;
    /**
     * Unit level ID for the return item. Different units of the same product will have different IDs.
     */
    returnItemId?: string;
    /**
     * IDs of the return shipments that this return item belongs to.
     */
    returnShipmentIds?: string[];
    /**
     * ID of the original shipment group. Provided for shipments with invoice support.
     */
    shipmentGroupId?: string;
    /**
     * ID of the shipment unit assigned by the merchant. Provided for shipments with invoice support.
     */
    shipmentUnitId?: string;
    /**
     * State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`"
     */
    state?: string;
}
