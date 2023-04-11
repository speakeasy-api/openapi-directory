import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable.
 */
export declare enum PlayParametersLegsEnum {
    Aleg = "aleg",
    Bleg = "bleg",
    Both = "both"
}
/**
 * POST parameters
 */
export declare class PlayParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call to play media into
     */
    callUUID: string;
    /**
     * Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable.
     */
    legs?: PlayParametersLegsEnum;
    /**
     * Maximum amount of time (in seconds) to playback the media
     */
    length?: number;
    /**
     * Loops the media file(s) indefinitely
     */
    loop?: boolean;
    /**
     * Whether the media should be mixed with the call's audio stream
     */
    mix?: boolean;
    /**
     * Comma separated list of file paths/URIs to be played
     */
    sounds: string;
}
