import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { ErrorT } from "./error";



// GetCarriersResponseBodyCarrierCarrierAdvancedOption
/** 
 * Advanced options that are specific to the carrier
**/
export class GetCarriersResponseBodyCarrierCarrierAdvancedOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_value" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetCarriersResponseBodyCarrierPackageType
/** 
 * A package type that a carrier supports for shipment.
**/
export class GetCarriersResponseBodyCarrierPackageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=package_code" })
  packageCode: string;

  @SpeakeasyMetadata({ data: "json, name=package_id" })
  packageId?: string;
}


// GetCarriersResponseBodyCarrierService
/** 
 * A service offered by the carrier
**/
export class GetCarriersResponseBodyCarrierService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_code" })
  carrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=domestic" })
  domestic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=international" })
  international?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_multi_package_supported" })
  isMultiPackageSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode?: string;
}


// GetCarriersResponseBodyCarrier
/** 
 * A carrier object that represents a provider such as UPS, USPS, DHL, etc
 * that has been tied to the current account.
 * 
**/
export class GetCarriersResponseBodyCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=carrier_code" })
  carrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=has_multi_package_supporting_services" })
  hasMultiPackageSupportingServices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCarriersResponseBodyCarrierCarrierAdvancedOption })
  options?: GetCarriersResponseBodyCarrierCarrierAdvancedOption[];

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: GetCarriersResponseBodyCarrierPackageType })
  packages?: GetCarriersResponseBodyCarrierPackageType[];

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requires_funded_amount" })
  requiresFundedAmount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GetCarriersResponseBodyCarrierService })
  services?: GetCarriersResponseBodyCarrierService[];

  @SpeakeasyMetadata({ data: "json, name=supports_label_messages" })
  supportsLabelMessages?: boolean;
}


// GetCarriersResponseBody
/** 
 * An error response body
**/
export class GetCarriersResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carriers", elemType: GetCarriersResponseBodyCarrier })
  carriers: GetCarriersResponseBodyCarrier[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorT })
  errors: ErrorT[];

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
