import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderreturnsLineItem extends SpeakeasyBase {
    /**
     * The ID of the line item. This value is assigned by Google when an order is created. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * The quantity of this line item.
     */
    quantity?: number;
}
