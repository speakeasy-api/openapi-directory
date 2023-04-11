import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class PosInventoryRequest extends SpeakeasyBase {
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string;
    /**
     * Global Trade Item Number.
     */
    gtin?: string;
    /**
     * Required. A unique identifier for the item.
     */
    itemId?: string;
    price?: Price;
    /**
     * Required. The available quantity of the item.
     */
    quantity?: string;
    /**
     * Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.
     */
    storeCode?: string;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string;
    /**
     * Required. The inventory timestamp, in ISO 8601 format.
     */
    timestamp?: string;
}
