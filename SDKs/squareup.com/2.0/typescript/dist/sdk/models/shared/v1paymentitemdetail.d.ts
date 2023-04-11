import { SpeakeasyBase } from "../../../internal/utils";
/**
 * V1PaymentItemDetail
 */
export declare class V1PaymentItemDetail extends SpeakeasyBase {
    /**
     * The name of the item's merchant-defined category, if any.
     */
    categoryName?: string;
    /**
     * The unique ID of the item purchased, if any.
     */
    itemId?: string;
    /**
     * The unique ID of the item variation purchased, if any.
     */
    itemVariationId?: string;
    /**
     *  The item's merchant-defined SKU, if any.
     */
    sku?: string;
}
