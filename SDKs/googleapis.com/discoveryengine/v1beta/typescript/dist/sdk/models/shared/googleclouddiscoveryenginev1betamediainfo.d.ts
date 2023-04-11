import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Media-specific user event information.
 */
export declare class GoogleCloudDiscoveryengineV1betaMediaInfo extends SpeakeasyBase {
    /**
     * The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90.
     */
    mediaProgressDuration?: string;
    /**
     * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between [0, 1.0] inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
     */
    mediaProgressPercentage?: number;
}
