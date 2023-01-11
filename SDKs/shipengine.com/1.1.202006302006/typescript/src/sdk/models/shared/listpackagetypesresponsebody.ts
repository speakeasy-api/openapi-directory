import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";



// ListPackageTypesResponseBodyPackageType
/** 
 * A package type that a carrier supports for shipment.
**/
export class ListPackageTypesResponseBodyPackageType extends SpeakeasyBase {
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


// ListPackageTypesResponseBody
/** 
 * A list package types response body
**/
export class ListPackageTypesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packages", elemType: ListPackageTypesResponseBodyPackageType })
  packages?: ListPackageTypesResponseBodyPackageType[];
}
