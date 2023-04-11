import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The podcast that this episode belongs to.
 */
export declare class EpisodeSearchResultPodcast extends SpeakeasyBase {
    genreIds?: number[];
    /**
     * Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.
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
     * The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.
     *
     * @remarks
     * If the score is not available, it'll be null. Learn more at listennotes.com/listen-score
     *
     */
    listenScore?: number;
    /**
     * The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.
     *
     * @remarks
     * For example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.
     * If the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score
     *
     */
    listenScoreGlobalRank?: string;
    /**
     * The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
    /**
     * Highlighted segment of this podcast's publisher name.
     */
    publisherHighlighted?: string;
    /**
     * Plain text of this podcast's publisher name.
     */
    publisherOriginal?: string;
    /**
     * Thumbnail image url for this podcast's artwork (300x300).
     */
    thumbnail?: string;
    /**
     * Highlighted segment of podcast name.
     */
    titleHighlighted?: string;
    /**
     * Plain text of podcast name.
     */
    titleOriginal?: string;
}
/**
 * When **type** is *episode*.
 */
export declare class EpisodeSearchResult extends SpeakeasyBase {
    /**
     * Audio url of this episode, which can be played directly.
     */
    audio?: string;
    /**
     * Audio length of this episode. In seconds.
     */
    audioLengthSec?: number;
    /**
     * Highlighted segment of this episode's description
     */
    descriptionHighlighted?: string;
    /**
     * Plain text of this episode's description
     */
    descriptionOriginal?: string;
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
     * iTunes id for this podcast.
     */
    itunesId?: number;
    /**
     * Web link of this episode.
     */
    link?: string;
    /**
     * The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
    /**
     * The podcast that this episode belongs to.
     */
    podcast?: EpisodeSearchResultPodcast;
    /**
     * Published date for this episode. In millisecond.
     */
    pubDateMs?: number;
    /**
     * RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
     */
    rss?: string;
    /**
     * Thumbnail image (300x300) url for this episode.
     *
     * @remarks
     * If an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.
     *
     */
    thumbnail?: string;
    /**
     * Highlighted segment of this episode's title
     */
    titleHighlighted?: string;
    /**
     * Plain text of this episode' title
     */
    titleOriginal?: string;
    /**
     * Up to 2 highlighted segments of the audio transcript of this episode.
     */
    transcriptsHighlighted?: string[];
}
