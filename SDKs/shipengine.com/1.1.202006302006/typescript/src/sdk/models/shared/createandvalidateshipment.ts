import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomsItem } from "./customsitem";
import { WeightUnitEnum } from "./weightunitenum";
import { AddressValidationResult } from "./addressvalidationresult";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { Package } from "./package";
import { Address } from "./address";
import { Tag } from "./tag";



// CreateAndValidateShipmentInternationalShipmentOptions
/** 
 * Options for international shipments, such as customs declarations.
**/
export class CreateAndValidateShipmentInternationalShipmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs_items", elemType: CustomsItem })
  customsItems?: CustomsItem[];

  @SpeakeasyMetadata({ data: "json, name=non_delivery" })
  nonDelivery: Record<string, any>;
}


// CreateAndValidateShipmentWeight
/** 
 * The weight of a package
**/
export class CreateAndValidateShipmentWeight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: WeightUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


// CreateAndValidateShipment
/** 
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
export class CreateAndValidateShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_validation" })
  addressValidation?: AddressValidationResult;

  @SpeakeasyMetadata({ data: "json, name=advanced_options" })
  advancedOptions?: AdvancedShipmentOptions;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs" })
  customs?: CreateAndValidateShipmentInternationalShipmentOptions;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_order_id" })
  externalOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_shipment_id" })
  externalShipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_provider" })
  insuranceProvider?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ShipmentItem })
  items?: ShipmentItem[];

  @SpeakeasyMetadata({ data: "json, name=modified_at" })
  modifiedAt?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=order_source_code" })
  orderSourceCode?: OrderSourceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=return_to" })
  returnTo?: Address;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ship_from" })
  shipFrom?: Address;

  @SpeakeasyMetadata({ data: "json, name=ship_to" })
  shipTo?: Address;

  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=shipment_status" })
  shipmentStatus?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=total_weight" })
  totalWeight?: CreateAndValidateShipmentWeight;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId?: Record<string, any>;
}
