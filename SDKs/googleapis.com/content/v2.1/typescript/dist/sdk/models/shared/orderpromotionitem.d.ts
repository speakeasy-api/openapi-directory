import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderPromotionItem extends SpeakeasyBase {
    /**
     * The line item ID of a product. Do not provide for `orders.createtestorder`.
     */
    lineItemId?: string;
    /**
     * Required. Offer ID of a product. Only for `orders.createtestorder`.
     */
    offerId?: string;
    /**
     * `orders.createtestorder`.
     */
    productId?: string;
    /**
     * The quantity of the associated product. Do not provide for `orders.createtestorder`.
     */
    quantity?: number;
}
