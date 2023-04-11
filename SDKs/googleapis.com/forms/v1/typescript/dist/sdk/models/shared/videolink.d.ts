import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Link to a video.
 */
export declare class VideoLink extends SpeakeasyBase {
    /**
     * Required. The display text for the link.
     */
    displayText?: string;
    /**
     * The URI of a YouTube video.
     */
    youtubeUri?: string;
}
