import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the products in an e-commerce transaction.
 */
export declare class ProductData extends SpeakeasyBase {
    /**
     * The total revenue from purchased product items.
     */
    itemRevenue?: number;
    /**
     * The product name, supplied by the e-commerce tracking application, for the purchased items.
     */
    productName?: string;
    /**
     * Total number of this product units in the transaction.
     */
    productQuantity?: string;
    /**
     * Unique code that represents the product.
     */
    productSku?: string;
}
