import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";
import { Price } from "./price";
export declare class TestOrderLineItemProduct extends SpeakeasyBase {
    /**
     * Required. Brand of the item.
     */
    brand?: string;
    /**
     * Required. Condition or state of the item. Acceptable values are: - "`new`"
     */
    condition?: string;
    /**
     * Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`"
     */
    contentLanguage?: string;
    /**
     * Fees for the item. Optional.
     */
    fees?: OrderLineItemProductFee[];
    /**
     * Global Trade Item Number (GTIN) of the item. Optional.
     */
    gtin?: string;
    /**
     * Required. URL of an image of the item.
     */
    imageLink?: string;
    /**
     * Shared identifier for all variants of the same product. Optional.
     */
    itemGroupId?: string;
    /**
     * Manufacturer Part Number (MPN) of the item. Optional.
     */
    mpn?: string;
    /**
     * Required. An identifier of the item.
     */
    offerId?: string;
    price?: Price;
    /**
     * Required. The CLDR territory code of the target country of the product.
     */
    targetCountry?: string;
    /**
     * Required. The title of the product.
     */
    title?: string;
    /**
     * Variant attributes for the item. Optional.
     */
    variantAttributes?: OrderLineItemProductVariantAttribute[];
}
