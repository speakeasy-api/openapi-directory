import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseVideo } from "./licensevideo";



// LicenseVideoRequest
/** 
 * List of videos to license
**/
export class LicenseVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos", elemType: LicenseVideo })
  videos: LicenseVideo[];
}
