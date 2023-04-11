import { SpeakeasyBase } from "../../../internal/utils";
export declare class PodcastTypeaheadResult extends SpeakeasyBase {
    /**
     * Whether this podcast contains explicit language.
     */
    explicitContent?: boolean;
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
