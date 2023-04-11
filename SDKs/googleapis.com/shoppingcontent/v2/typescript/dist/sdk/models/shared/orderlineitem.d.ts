import { SpeakeasyBase } from "../../../internal/utils";
import { OrderCancellation } from "./ordercancellation";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
import { OrderReturn } from "./orderreturn";
import { Price } from "./price";
export declare class OrderLineItem extends SpeakeasyBase {
    /**
     * Annotations that are attached to the line item.
     */
    annotations?: OrderMerchantProvidedAnnotation[];
    /**
     * Cancellations of the line item.
     */
    cancellations?: OrderCancellation[];
    /**
     * The ID of the line item.
     */
    id?: string;
    price?: Price;
    product?: OrderLineItemProduct;
    /**
     * Number of items canceled.
     */
    quantityCanceled?: number;
    /**
     * Number of items delivered.
     */
    quantityDelivered?: number;
    /**
     * Number of items ordered.
     */
    quantityOrdered?: number;
    /**
     * Number of items pending.
     */
    quantityPending?: number;
    /**
     * Number of items ready for pickup.
     */
    quantityReadyForPickup?: number;
    /**
     * Number of items returned.
     */
    quantityReturned?: number;
    /**
     * Number of items shipped.
     */
    quantityShipped?: number;
    returnInfo?: OrderLineItemReturnInfo;
    /**
     * Returns of the line item.
     */
    returns?: OrderReturn[];
    shippingDetails?: OrderLineItemShippingDetails;
    tax?: Price;
}
