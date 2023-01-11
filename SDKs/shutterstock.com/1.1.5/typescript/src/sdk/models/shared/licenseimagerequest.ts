import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseImage } from "./licenseimage";



// LicenseImageRequest
/** 
 * Image license request data
**/
export class LicenseImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: LicenseImage })
  images: LicenseImage[];
}
