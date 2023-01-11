import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";



// ListCarrierPackageTypesResponseBodyPackageType
/** 
 * A package type that a carrier supports for shipment.
**/
export class ListCarrierPackageTypesResponseBodyPackageType extends SpeakeasyBase {
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


// ListCarrierPackageTypesResponseBody
/** 
 * A list carrier package types response body
**/
export class ListCarrierPackageTypesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packages", elemType: ListCarrierPackageTypesResponseBodyPackageType })
  packages?: ListCarrierPackageTypesResponseBodyPackageType[];
}
