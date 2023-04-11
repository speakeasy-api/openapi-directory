import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";
import { Price } from "./price";
export declare class OrderLineItemProduct extends SpeakeasyBase {
    /**
     * Brand of the item.
     */
    brand?: string;
    /**
     * Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`"
     */
    condition?: string;
    /**
     * The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string;
    /**
     * Associated fees at order creation time.
     */
    fees?: OrderLineItemProductFee[];
    /**
     * Global Trade Item Number (GTIN) of the item.
     */
    gtin?: string;
    /**
     * The REST ID of the product.
     */
    id?: string;
    /**
     * URL of an image of the item.
     */
    imageLink?: string;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string;
    /**
     * Manufacturer Part Number (MPN) of the item.
     */
    mpn?: string;
    /**
     * An identifier of the item.
     */
    offerId?: string;
    price?: Price;
    /**
     * URL to the cached image shown to the user when order was placed.
     */
    shownImage?: string;
    /**
     * The CLDR territory code of the target country of the product.
     */
    targetCountry?: string;
    /**
     * The title of the product.
     */
    title?: string;
    /**
     * Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.
     */
    variantAttributes?: OrderLineItemProductVariantAttribute[];
}
