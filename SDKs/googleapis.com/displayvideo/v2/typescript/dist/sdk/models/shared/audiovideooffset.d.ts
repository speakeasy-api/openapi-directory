import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The length an audio or a video has been played.
 */
export declare class AudioVideoOffset extends SpeakeasyBase {
    /**
     * The offset in percentage of the audio or video duration.
     */
    percentage?: string;
    /**
     * The offset in seconds from the start of the audio or video.
     */
    seconds?: string;
}
