import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryValue } from "./monetaryvalue";
/**
 * The customs declaration for a single item in the shipment.
**/
export declare class CustomsItemInput extends SpeakeasyBase {
    countryOfOrigin?: Record<string, any>;
    description?: string;
    harmonizedTariffCode?: string;
    quantity?: number;
    sku?: string;
    skuDescription?: string;
    unitOfMeasure?: string;
    value?: MonetaryValue;
}
/**
 * The customs declaration for a single item in the shipment.
**/
export declare class CustomsItem extends SpeakeasyBase {
    countryOfOrigin?: Record<string, any>;
    customsItemId: Record<string, any>;
    description?: string;
    harmonizedTariffCode?: string;
    quantity?: number;
    sku?: string;
    skuDescription?: string;
    unitOfMeasure?: string;
    value?: MonetaryValue;
}
