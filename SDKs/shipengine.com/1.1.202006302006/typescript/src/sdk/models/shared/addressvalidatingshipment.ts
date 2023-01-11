import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomsItemInput } from "./customsitem";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { Address } from "./address";



// AddressValidatingShipmentInternationalShipmentOptionsInput
/** 
 * Options for international shipments, such as customs declarations.
**/
export class AddressValidatingShipmentInternationalShipmentOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs_items", elemType: CustomsItemInput })
  customsItems?: CustomsItemInput[];

  @SpeakeasyMetadata({ data: "json, name=non_delivery" })
  nonDelivery: Record<string, any>;
}


// AddressValidatingShipmentInput
/** 
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
export class AddressValidatingShipmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advanced_options" })
  advancedOptions?: AdvancedShipmentOptions;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs" })
  customs?: AddressValidatingShipmentInternationalShipmentOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=external_order_id" })
  externalOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_shipment_id" })
  externalShipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_provider" })
  insuranceProvider?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ShipmentItem })
  items?: ShipmentItem[];

  @SpeakeasyMetadata({ data: "json, name=order_source_code" })
  orderSourceCode?: OrderSourceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: PackageInput })
  packages?: PackageInput[];

  @SpeakeasyMetadata({ data: "json, name=return_to" })
  returnTo?: Address;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ship_from" })
  shipFrom: Address;

  @SpeakeasyMetadata({ data: "json, name=ship_to" })
  shipTo: Address;

  @SpeakeasyMetadata({ data: "json, name=validate_address" })
  validateAddress?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId?: Record<string, any>;
}
