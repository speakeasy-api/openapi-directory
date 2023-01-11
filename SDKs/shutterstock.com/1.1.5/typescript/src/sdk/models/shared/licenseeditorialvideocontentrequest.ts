import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseEditorialVideoContent } from "./licenseeditorialvideocontent";



// LicenseEditorialVideoContentRequest
/** 
 * License editorial video content request
**/
export class LicenseEditorialVideoContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country: any;

  @SpeakeasyMetadata({ data: "json, name=editorial", elemType: LicenseEditorialVideoContent })
  editorial: LicenseEditorialVideoContent[];
}
