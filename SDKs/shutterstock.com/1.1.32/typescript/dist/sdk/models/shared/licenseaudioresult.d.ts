import { SpeakeasyBase } from "../../../internal/utils";
import { AudioUrl } from "./audiourl";
/**
 * The response to a licensing request for an audio track
 */
export declare class LicenseAudioResult extends SpeakeasyBase {
    /**
     * Number of credits that this licensing event used
     */
    allotmentCharge?: number;
    /**
     * ID of the track that was licensed
     */
    audioId: string;
    /**
     * Audio License URL object
     */
    download?: AudioUrl;
    /**
     * Error information if applicable
     */
    error?: string;
    /**
     * ID of the license event
     */
    licenseId?: string;
}
