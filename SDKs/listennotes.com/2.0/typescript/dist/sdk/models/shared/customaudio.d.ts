import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom audio in a playlist, which is a type of playlist item.
 */
export declare class CustomAudio extends SpeakeasyBase {
    /**
     * Audio url, which can be played directly.
     */
    audio?: string;
    /**
     * Audio length in seconds.
     */
    audioLengthSec?: number;
    /**
     * High resolution image url of this custom audio.
     */
    image?: string;
    /**
     * Published date (in milliseconds) of this custom audio.
     *
     * @remarks
     * For now, it's the same as **added_at_ms** of this playlist item.
     *
     */
    pubDateMs?: number;
    /**
     * Low resolution image url of this custom audio.
     */
    thumbnail?: string;
    /**
     * Custom audio title.
     */
    title?: string;
}
