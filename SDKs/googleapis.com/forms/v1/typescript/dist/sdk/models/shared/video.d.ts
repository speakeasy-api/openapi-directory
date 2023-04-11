import { SpeakeasyBase } from "../../../internal/utils";
import { MediaProperties } from "./mediaproperties";
/**
 * Data representing a video.
 */
export declare class Video extends SpeakeasyBase {
    /**
     * Properties of the media.
     */
    properties?: MediaProperties;
    /**
     * Required. A YouTube URI.
     */
    youtubeUri?: string;
}
