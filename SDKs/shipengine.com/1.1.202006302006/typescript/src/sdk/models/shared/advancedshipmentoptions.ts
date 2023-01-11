import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeightUnitEnum } from "./weightunitenum";
import { CollectOnDelivery } from "./collectondelivery";



// AdvancedShipmentOptionsWeight
/** 
 * The weight of a package
**/
export class AdvancedShipmentOptionsWeight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: WeightUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


// AdvancedShipmentOptions
/** 
 * Advanced shipment options
**/
export class AdvancedShipmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bill_to_account" })
  billToAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=bill_to_country_code" })
  billToCountryCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bill_to_party" })
  billToParty?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bill_to_postal_code" })
  billToPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=collect_on_delivery" })
  collectOnDelivery?: CollectOnDelivery;

  @SpeakeasyMetadata({ data: "json, name=contains_alcohol" })
  containsAlcohol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=custom_field1" })
  customField1?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_field2" })
  customField2?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_field3" })
  customField3?: string;

  @SpeakeasyMetadata({ data: "json, name=delivered_duty_paid" })
  deliveredDutyPaid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dry_ice" })
  dryIce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dry_ice_weight" })
  dryIceWeight?: AdvancedShipmentOptionsWeight;

  @SpeakeasyMetadata({ data: "json, name=freight_class" })
  freightClass?: string;

  @SpeakeasyMetadata({ data: "json, name=non_machinable" })
  nonMachinable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saturday_delivery" })
  saturdayDelivery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_ups_ground_freight_pricing" })
  useUpsGroundFreightPricing?: boolean;
}
