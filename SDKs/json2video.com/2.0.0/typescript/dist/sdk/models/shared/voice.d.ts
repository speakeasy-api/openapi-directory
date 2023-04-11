import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceTypeEnum {
    Voice = "voice"
}
/**
 * Creates a voice audio element from the provided text
 */
export declare class Voice extends SpeakeasyBase {
    /**
     * Element's cache policy. When true, the cached version (if exists) is used. When false, the assets is downloaded.
     */
    cache?: boolean;
    /**
     * Used for adding your comments
     */
    comment?: string;
    /**
     * Element's duration in seconds. A value of -1 auto calculates the duration based on the asset intrinsic length or the scene duration.
     */
    duration?: number;
    /**
     * Element's time span added after the playback.
     */
    extraTime?: number;
    /**
     * Adds a fade in effect to the element. Value in seconds.
     */
    fadeIn?: number;
    /**
     * Adds a fade out effect to the element. Value in seconds.
     */
    fadeOut?: number;
    /**
     * Mutes the audio
     */
    muted?: boolean;
    /**
     * Element's starting time in seconds relative to the container scene or the movie if the element is in the Movie's elements array.
     */
    start?: number;
    /**
     * The sentence or sentences to be converted to voice audio
     */
    text: string;
    type: VoiceTypeEnum;
    /**
     * The voice name to be used. Check <a href="/docs/tutorial/voice-elements/">available voices</a>.
     */
    voice?: string;
    volume?: number;
    /**
     * Element's z-index. Use this property to reorganize the layering of the elements like in HTML
     */
    zIndex?: number;
}
