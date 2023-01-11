import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";



// UpdatePackageTypeRequestBody
/** 
 * A package type that a carrier supports for shipment.
**/
export class UpdatePackageTypeRequestBody extends SpeakeasyBase {
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
