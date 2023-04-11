import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";
/**
 * Format the product package
 */
export declare enum ProductEditFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}
/**
 * Status of the product
 */
export declare enum ProductEditFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class ProductEditFields extends SpeakeasyBase {
    /**
     * Barcode of the product
     */
    barcode?: string;
    categories?: CategoryFields[];
    /**
     * Description of the product
     */
    description?: string;
    /**
     * Diameter of the product
     */
    diameter?: number;
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
     * Length of the product
     */
    length?: number;
    /**
     * SEO meta description of the product
     */
    metaDescription?: string;
    /**
     * Name of the product
     */
    name: string;
    /**
     * Format the product package
     */
    packageFormat?: ProductEditFieldsPackageFormatEnum;
    /**
     * SEO title of the product
     */
    pageTitle?: string;
    /**
     * Product unique URL path
     */
    permalink?: string;
    /**
     * Price of the product
     */
    price: number;
    /**
     * False if the product is digital
     */
    shippingRequired?: boolean;
    /**
     * Stock Keeping Unit of the product
     */
    sku?: string;
    /**
     * Status of the product
     */
    status?: ProductEditFieldsStatusEnum;
    /**
     * Quantity in stock for the product
     */
    stock?: number;
    /**
     * True if the Product has unlimited stock
     */
    stockUnlimited?: boolean;
    /**
     * Weight of the product
     */
    weight?: number;
    /**
     * Width of the product
     */
    width?: number;
}
