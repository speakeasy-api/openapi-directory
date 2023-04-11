import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { RefundReason } from "./refundreason";
export declare class MerchantOrderReturnItem extends SpeakeasyBase {
    customerReturnReason?: CustomerReturnReason;
    /**
     * Product level item ID. If the returned items are of the same product, they will have the same ID.
     */
    itemId?: string;
    merchantReturnReason?: RefundReason;
    product?: OrderLineItemProduct;
    /**
     * IDs of the return shipments that this return item belongs to.
     */
    returnShipmentIds?: string[];
    /**
     * State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`"
     */
    state?: string;
}
