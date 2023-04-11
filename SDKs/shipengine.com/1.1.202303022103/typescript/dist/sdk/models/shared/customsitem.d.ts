import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryValue } from "./monetaryvalue";
import { Weight } from "./weight";
/**
 * The customs declaration for a single item in the shipment.
 */
export declare class CustomsItemInput extends SpeakeasyBase {
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
     *
     * @remarks
     *
     */
    countryOfOrigin?: string;
    /**
     * A description of the item
     */
    description?: string;
    /**
     * The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
     */
    harmonizedTariffCode?: string;
    /**
     * The quantity of this item in the shipment.
     */
    quantity?: number;
    /**
     * The SKU (Stock Keeping Unit) of the customs item
     */
    sku?: string;
    /**
     * Description of the Custom Item's SKU
     */
    skuDescription?: string;
    unitOfMeasure?: string;
    /**
     * The declared customs value of each item
     */
    value?: MonetaryValue;
    /**
     * The item weight
     */
    weight?: Weight;
}
/**
 * The customs declaration for a single item in the shipment.
 */
export declare class CustomsItem extends SpeakeasyBase {
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
     *
     * @remarks
     *
     */
    countryOfOrigin?: string;
    /**
     * A string that uniquely identifies the customs item
     */
    customsItemId: string;
    /**
     * A description of the item
     */
    description?: string;
    /**
     * The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
     */
    harmonizedTariffCode?: string;
    /**
     * The quantity of this item in the shipment.
     */
    quantity?: number;
    /**
     * The SKU (Stock Keeping Unit) of the customs item
     */
    sku?: string;
    /**
     * Description of the Custom Item's SKU
     */
    skuDescription?: string;
    unitOfMeasure?: string;
    /**
     * The declared customs value of each item
     */
    value?: MonetaryValue;
    /**
     * The item weight
     */
    weight?: Weight;
}
