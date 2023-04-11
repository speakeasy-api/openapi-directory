import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
export declare class CuratedListSimple extends SpeakeasyBase {
    /**
     * This curated list's description.
     */
    description?: string;
    /**
     * Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.
     */
    id?: string;
    /**
     * The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl?: string;
    /**
     * Minimum meta data of up to 5 podcasts in this curated list.
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
     * Curated list name.
     */
    title?: string;
    /**
     * The total number of podcasts in this curated list.
     */
    total?: number;
}
