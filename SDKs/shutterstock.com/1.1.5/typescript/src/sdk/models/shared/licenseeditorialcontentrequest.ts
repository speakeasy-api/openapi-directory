import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseEditorialContent } from "./licenseeditorialcontent";



// LicenseEditorialContentRequest
/** 
 * License editorial content request
**/
export class LicenseEditorialContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country: any;

  @SpeakeasyMetadata({ data: "json, name=editorial", elemType: LicenseEditorialContent })
  editorial: LicenseEditorialContent[];
}
