import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomsItemInput } from "./customsitem";
import { AdvancedShipmentOptions } from "./advancedshipmentoptions";
import { ShipmentItem } from "./shipmentitem";
import { OrderSourceNameEnum } from "./ordersourcenameenum";
import { PackageInput } from "./package";
import { Address } from "./address";
import { LabelChargeEventEnum } from "./labelchargeeventenum";



// CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput
/** 
 * Options for international shipments, such as customs declarations.
**/
export class CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs_items", elemType: CustomsItemInput })
  customsItems?: CustomsItemInput[];

  @SpeakeasyMetadata({ data: "json, name=non_delivery" })
  nonDelivery: Record<string, any>;
}


// CreateLabelRequestBodyPartialShipmentInput
/** 
 * The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
 * 
**/
export class CreateLabelRequestBodyPartialShipmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advanced_options" })
  advancedOptions: AdvancedShipmentOptions;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "json, name=confirmation" })
  confirmation: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customs" })
  customs: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=external_order_id" })
  externalOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_shipment_id" })
  externalShipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_provider" })
  insuranceProvider: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ShipmentItem })
  items?: ShipmentItem[];

  @SpeakeasyMetadata({ data: "json, name=order_source_code" })
  orderSourceCode?: OrderSourceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: PackageInput })
  packages: PackageInput[];

  @SpeakeasyMetadata({ data: "json, name=return_to" })
  returnTo: Address;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate: Date;

  @SpeakeasyMetadata({ data: "json, name=ship_from" })
  shipFrom: Address;

  @SpeakeasyMetadata({ data: "json, name=ship_to" })
  shipTo: Address;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId: Record<string, any>;
}


// CreateLabelRequestBodyInput
/** 
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
export class CreateLabelRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charge_event" })
  chargeEvent?: LabelChargeEventEnum;

  @SpeakeasyMetadata({ data: "json, name=is_return_label" })
  isReturnLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label_download_type" })
  labelDownloadType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_image_id" })
  labelImageId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=outbound_label_id" })
  outboundLabelId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rma_number" })
  rmaNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipment" })
  shipment: CreateLabelRequestBodyPartialShipmentInput;

  @SpeakeasyMetadata({ data: "json, name=test_label" })
  testLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validate_address" })
  validateAddress?: Record<string, any>;
}
