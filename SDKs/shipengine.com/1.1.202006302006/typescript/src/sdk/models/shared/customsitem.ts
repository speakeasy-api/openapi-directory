import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonetaryValue } from "./monetaryvalue";



// CustomsItemInput
/** 
 * The customs declaration for a single item in the shipment.
**/
export class CustomsItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_of_origin" })
  countryOfOrigin?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=harmonized_tariff_code" })
  harmonizedTariffCode?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=sku_description" })
  skuDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: MonetaryValue;
}


// CustomsItem
/** 
 * The customs declaration for a single item in the shipment.
**/
export class CustomsItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_of_origin" })
  countryOfOrigin?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs_item_id" })
  customsItemId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=harmonized_tariff_code" })
  harmonizedTariffCode?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=sku_description" })
  skuDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=unit_of_measure" })
  unitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: MonetaryValue;
}
