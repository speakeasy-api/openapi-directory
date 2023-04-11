import { SpeakeasyBase } from "../../../internal/utils";
import { ImageFields } from "./imagefields";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";
export declare class VariantFields extends SpeakeasyBase {
    /**
     * Unique identifier of the product
     */
    id?: number;
    image?: ImageFields;
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
