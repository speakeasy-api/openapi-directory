import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderShipmentLineItemShipment extends SpeakeasyBase {
    /**
     * The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The quantity that is shipped.
     */
    quantity?: number;
}
