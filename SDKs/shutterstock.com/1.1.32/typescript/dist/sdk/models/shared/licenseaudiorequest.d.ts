import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseAudio } from "./licenseaudio";
/**
 * Audio license request data
 */
export declare class LicenseAudioRequest extends SpeakeasyBase {
    /**
     * List of audio tracks to license
     */
    audio: LicenseAudio[];
}
