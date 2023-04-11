import { SpeakeasyBase } from "../../../internal/utils";
import { Animation } from "./animation";
import { Image } from "./image";
/**
 * Overlay configuration.
 */
export declare class Overlay extends SpeakeasyBase {
    /**
     * List of Animations. The list should be chronological, without any time overlap.
     */
    animations?: Animation[];
    /**
     * Overlaid jpeg image.
     */
    image?: Image;
}
