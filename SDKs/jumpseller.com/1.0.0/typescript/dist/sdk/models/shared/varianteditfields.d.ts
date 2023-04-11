import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";
export declare class VariantEditFields extends SpeakeasyBase {
    /**
     * Unique identifier of the product image to associate with this variant
     */
    imageId?: number;
    options?: ProductOptionVariantEdit[];
    /**
     * Price of the product
     */
    price?: number;
    /**
     * Stock Keeping Unit of the Product's Variant
     */
    sku?: string;
    /**
     * Quantity in stock for the Product's Variant
     */
    stock?: number;
    /**
     * True if the Product's Variant has unlimited stock
     */
    stockUnlimited?: boolean;
}
