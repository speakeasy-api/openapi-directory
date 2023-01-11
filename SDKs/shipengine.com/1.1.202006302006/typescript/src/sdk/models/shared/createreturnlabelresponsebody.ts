import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
import { Package } from "./package";



// CreateReturnLabelResponseBodyOptionalLink
/** 
 * A link to a related resource, or an empty object if there is no resource to link to
**/
export class CreateReturnLabelResponseBodyOptionalLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// CreateReturnLabelResponseBodyMonetaryValue
/** 
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
export class CreateReturnLabelResponseBodyMonetaryValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;
}


// CreateReturnLabelResponseBodyLabelDownload
/** 
 * Reference to the various downloadable file formats for the generated label
 * 
**/
export class CreateReturnLabelResponseBodyLabelDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: string;

  @SpeakeasyMetadata({ data: "json, name=png" })
  png?: string;

  @SpeakeasyMetadata({ data: "json, name=zpl" })
  zpl?: string;
}


// CreateReturnLabelResponseBodyOutput
/** 
 * A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
 * 
**/
export class CreateReturnLabelResponseBodyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch_id" })
  batchId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=carrier_code" })
  carrierCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=charge_event" })
  chargeEvent?: LabelChargeEventEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=form_download" })
  formDownload?: CreateReturnLabelResponseBodyOptionalLink;

  @SpeakeasyMetadata({ data: "json, name=insurance_claim" })
  insuranceClaim?: CreateReturnLabelResponseBodyOptionalLink;

  @SpeakeasyMetadata({ data: "json, name=insurance_cost" })
  insuranceCost?: CreateReturnLabelResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=is_international" })
  isInternational?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_return_label" })
  isReturnLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label_download" })
  labelDownload?: CreateReturnLabelResponseBodyLabelDownload;

  @SpeakeasyMetadata({ data: "json, name=label_format" })
  labelFormat?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_id" })
  labelId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_image_id" })
  labelImageId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=label_layout" })
  labelLayout?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=package_code" })
  packageCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];

  @SpeakeasyMetadata({ data: "json, name=rma_number" })
  rmaNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=shipment_cost" })
  shipmentCost?: CreateReturnLabelResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=shipment_id" })
  shipmentId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=trackable" })
  trackable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_status" })
  trackingStatus?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=voided" })
  voided?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voided_at" })
  voidedAt?: Record<string, any>;
}
