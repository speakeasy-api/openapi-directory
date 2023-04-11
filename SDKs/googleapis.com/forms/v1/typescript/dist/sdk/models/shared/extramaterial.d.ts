import { SpeakeasyBase } from "../../../internal/utils";
import { TextLink } from "./textlink";
import { VideoLink } from "./videolink";
/**
 * Supplementary material to the feedback.
 */
export declare class ExtraMaterial extends SpeakeasyBase {
    /**
     * Link for text.
     */
    link?: TextLink;
    /**
     * Link to a video.
     */
    video?: VideoLink;
}
