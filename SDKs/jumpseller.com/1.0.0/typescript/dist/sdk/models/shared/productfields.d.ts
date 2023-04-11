import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";
import { ImageFields } from "./imagefields";
import { VariantFields } from "./variantfields";
/**
 * Format the product package
 */
export declare enum ProductFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}
/**
 * Status of the product
 */
export declare enum ProductFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class ProductFields extends SpeakeasyBase {
    /**
     * Barcode of the product
     */
    barcode?: string;
    categories?: CategoryFields[];
    /**
     * Date of product creation
     */
    createdAt?: string;
    /**
     * Description of the product
     */
    description?: string;
    /**
     * Diameter of the product
     */
    diameter?: number;
    /**
     * Discount of the product
     */
    discount?: number;
    /**
     * True if the product is featured
     */
    featured?: boolean;
    /**
     * Category of a Product based on the Google product taxonomy
     */
    googleProductCategory?: string;
    /**
     * Height of the product
     */
    height?: number;
    /**
     * Unique identifier of the product
     */
    id?: number;
    images?: ImageFields[];
    /**
     * Length of the product
     */
    length?: number;
    /**
     * Name of the product
     */
    name?: string;
    /**
     * Format the product package
     */
    packageFormat?: ProductFieldsPackageFormatEnum;
    /**
     * Product unique URL path
     */
    permalink?: string;
    /**
     * Price of the product
     */
    price?: number;
    /**
     * Stock Keeping Unit of the product
     */
    sku?: string;
    /**
     * Status of the product
     */
    status?: ProductFieldsStatusEnum;
    /**
     * Quantity in stock for the product
     */
    stock?: number;
    /**
     * True if the Product has unlimited stock
     */
    stockUnlimited?: boolean;
    variants?: VariantFields[];
    /**
     * Weight of the product
     */
    weight?: number;
    /**
     * Width of the product
     */
    width?: number;
}
