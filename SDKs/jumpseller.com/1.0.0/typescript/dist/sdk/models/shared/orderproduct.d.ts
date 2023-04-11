import { SpeakeasyBase } from "../../../internal/utils";
import { OrderProductTax } from "./orderproducttax";
export declare class OrderProduct extends SpeakeasyBase {
    /**
     * Discount of the Order Product
     */
    discount?: number;
    /**
     * Unique identifier of the original Product
     */
    id?: number;
    /**
     * Image URL of the Order Product
     */
    image?: string;
    /**
     * Name of the Order Product
     */
    name?: string;
    /**
     * Price of the Order Product
     */
    price?: number;
    /**
     * Price of the Order Product
     */
    qty?: number;
    /**
     * Stock Keeping Unit of the Order Product
     */
    sku?: string;
    taxes?: OrderProductTax[];
    /**
     * Unique identifier of the original Product Variant
     */
    variantId?: number;
    /**
     * Weight of the Order Product
     */
    weight?: number;
}
