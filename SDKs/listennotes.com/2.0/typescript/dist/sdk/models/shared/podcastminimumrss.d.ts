import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Triggered by your request to DELETE /podcasts/{id}, if the podcast is actually deleted.
 */
export declare class PodcastMinimumRss extends SpeakeasyBase {
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
     * The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
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
}
