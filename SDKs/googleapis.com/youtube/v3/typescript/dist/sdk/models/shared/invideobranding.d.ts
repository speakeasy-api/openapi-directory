import { SpeakeasyBase } from "../../../internal/utils";
import { InvideoPosition } from "./invideoposition";
import { InvideoTiming } from "./invideotiming";
/**
 * LINT.IfChange Describes an invideo branding.
 */
export declare class InvideoBranding extends SpeakeasyBase {
    /**
     * The bytes the uploaded image. Only used in api to youtube communication.
     */
    imageBytes?: string;
    /**
     * The url of the uploaded image. Only used in apiary to api communication.
     */
    imageUrl?: string;
    /**
     * Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
     */
    position?: InvideoPosition;
    /**
     * The channel to which this branding links. If not present it defaults to the current channel.
     */
    targetChannelId?: string;
    /**
     * Describes a temporal position of a visual widget inside a video.
     */
    timing?: InvideoTiming;
}
