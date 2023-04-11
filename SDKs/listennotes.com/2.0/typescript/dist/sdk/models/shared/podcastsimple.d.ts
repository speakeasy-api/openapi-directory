import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastExtraField } from "./podcastextrafield";
import { PodcastLookingForField } from "./podcastlookingforfield";
import { PodcastTypeFieldEnum } from "./podcasttypefieldenum";
export declare class PodcastSimple extends SpeakeasyBase {
    /**
     * Average audio length of all episodes of this podcast. In seconds.
     */
    audioLengthSec?: number;
    /**
     * The country where this podcast is produced.
     */
    country?: string;
    /**
     * Html of this episode's full description
     */
    description?: string;
    /**
     * The published date of the oldest episode of this podcast. In milliseconds
     */
    earliestPubDateMs?: number;
    /**
     * The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.
     */
    email?: string;
    /**
     * Whether this podcast contains explicit language.
     */
    explicitContent?: boolean;
    extra?: PodcastExtraField;
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
     * Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).
     */
    isClaimed?: boolean;
    /**
     * iTunes id for this podcast.
     */
    itunesId?: number;
    /**
     * The language of this podcast. You can get all supported languages from `GET /languages`.
     */
    language?: string;
    /**
     * The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.
     */
    latestEpisodeId?: string;
    /**
     * The published date of the latest episode of this podcast. In milliseconds
     */
    latestPubDateMs?: number;
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
    lookingFor?: PodcastLookingForField;
    /**
     * Podcast publisher name.
     */
    publisher?: string;
    /**
     * RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.
     */
    rss?: string;
    /**
     * Thumbnail image url for this podcast's artwork (300x300).
     */
    thumbnail?: string;
    /**
     * Podcast name.
     */
    title?: string;
    /**
     * Total number of episodes in this podcast.
     */
    totalEpisodes?: number;
    /**
     * The type of this podcast - episodic or serial.
     */
    type?: PodcastTypeFieldEnum;
    /**
     * How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).
     */
    updateFrequencyHours?: number;
    /**
     * Website url of this podcast.
     */
    website?: string;
}
