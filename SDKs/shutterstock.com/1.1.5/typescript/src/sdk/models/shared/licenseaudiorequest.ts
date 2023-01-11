import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseAudio } from "./licenseaudio";



// LicenseAudioRequest
/** 
 * Audio license request data
**/
export class LicenseAudioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio", elemType: LicenseAudio })
  audio: LicenseAudio[];
}
