import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductIdentifiers extends SpeakeasyBase {
    /**
     * The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.
     */
    brand?: string;
    /**
     * The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '
     */
    categoryPath?: string;
    /**
     * Color to be shown to the end customer (max 64 characters).
     */
    color?: string;
    /**
     * The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible
     */
    globalTradeItemNumber?: string;
    /**
     * The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible
     */
    manufacturerPartNumber?: string;
    /**
     * Size to be shown to the end customer (max 64 characters).
     */
    size?: string;
}
