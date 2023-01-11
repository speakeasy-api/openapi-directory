import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListCarrierServicesResponseBodyService
/** 
 * A service offered by the carrier
**/
export class ListCarrierServicesResponseBodyService extends SpeakeasyBase {
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


// ListCarrierServicesResponseBody
/** 
 * A carrier list services response body
**/
export class ListCarrierServicesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: ListCarrierServicesResponseBodyService })
  services?: ListCarrierServicesResponseBodyService[];
}
