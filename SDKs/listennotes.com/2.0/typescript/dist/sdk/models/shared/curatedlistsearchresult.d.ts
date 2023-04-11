import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
/**
 * When **type** is *curated*.
 */
export declare class CuratedListSearchResult extends SpeakeasyBase {
    /**
     * Highlighted segment of this curated list's description
     */
    descriptionHighlighted?: string;
    /**
     * Plain text of this curated list's description
     */
    descriptionOriginal?: string;
    /**
     * Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.
     */
    id?: string;
    /**
     * The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
    /**
     * Up to 5 podcasts in this curated list.
     */
    podcasts?: PodcastMinimum[];
    /**
     * Published date of this curated list. In milliseconds.
     */
    pubDateMs?: number;
    /**
     * The domain name of the source of this curated list.
     */
    sourceDomain?: string;
    /**
     * Url of the source of this curated list.
     */
    sourceUrl?: string;
    /**
     * Highlighted segment of this curated list's title
     */
    titleHighlighted?: string;
    /**
     * Plain text of this curated list's title
     */
    titleOriginal?: string;
    /**
     * The total number of podcasts in this curated list.
     */
    total?: number;
}
