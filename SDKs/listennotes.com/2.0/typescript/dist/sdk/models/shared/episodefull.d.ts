import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";
/**
 * OK
 */
export declare class EpisodeFull extends SpeakeasyBase {
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
     * Image url for this episode.
     *
     * @remarks
     * If an episode doesn't have its own image, then this field would be the url of the podcast artwork image.
     * If you are using PRO/ENTERPRISE plan, then it's
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
    podcast?: PodcastSimple;
    /**
     * Published date for this episode. In millisecond.
     */
    pubDateMs?: number;
    /**
     * Thumbnail image (300x300) url for this episode.
     *
     * @remarks
     * If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
     *
     */
    thumbnail?: string;
    /**
     * Episode name.
     */
    title?: string;
    /**
     * The transcript of this episode, in plain text (with the newline character \n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.
     */
    transcript?: string;
}
