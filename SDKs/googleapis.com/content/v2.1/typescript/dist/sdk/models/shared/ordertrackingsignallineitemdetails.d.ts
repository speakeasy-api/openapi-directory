import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The line items of the order.
 */
export declare class OrderTrackingSignalLineItemDetails extends SpeakeasyBase {
    /**
     * Brand of the product.
     */
    brand?: string;
    /**
     * The Global Trade Item Number.
     */
    gtin?: string;
    /**
     * Required. The ID for this line item.
     */
    lineItemId?: string;
    /**
     * The manufacturer part number.
     */
    mpn?: string;
    /**
     * Plain text description of this product (deprecated: Please use product_title instead).
     */
    productDescription?: string;
    /**
     * Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId.
     */
    productId?: string;
    /**
     * Plain text title of this product.
     */
    productTitle?: string;
    /**
     * The quantity of the line item in the order.
     */
    quantity?: string;
    /**
     * Merchant SKU for this item (deprecated).
     */
    sku?: string;
    /**
     * Universal product code for this item (deprecated: Please use GTIN instead).
     */
    upc?: string;
}
