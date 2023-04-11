import { SpeakeasyBase } from "../../../internal/utils";
export declare class EpisodeMinimum extends SpeakeasyBase {
    /**
     * Audio url of this episode, which can be played directly.
     */
    audio?: string;
    /**
     * Audio length of this episode. In seconds.
     */
    audioLengthSec?: number;
    /**
     * Html of this episode's full description
     */
    description?: string;
    /**
     * Whether this podcast contains explicit language.
     */
    explicitContent?: boolean;
    /**
     * Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
     */
    id?: string;
    /**
     * Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's
     *
     * @remarks
     * a high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,
     * low resolution image (300x300).
     *
     */
    image?: string;
    /**
     * Web link of this episode.
     */
    link?: string;
    /**
     * Edit url of this episode where you can update the audio url if you find the audio is broken.
     */
    listennotesEditUrl?: string;
    /**
     * The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
    /**
     * Whether or not this episode's audio is invalid. Podcasters may delete the original audio.
     */
    maybeAudioInvalid?: boolean;
    /**
     * Published date for this episode. In millisecond.
     */
    pubDateMs?: number;
    /**
     * Thumbnail image url for this podcast's artwork (300x300).
     */
    thumbnail?: string;
    /**
     * Episode name.
     */
    title?: string;
}
