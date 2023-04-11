import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";
/**
 * OK
 */
export declare class BestPodcastsResponse extends SpeakeasyBase {
    hasNext: boolean;
    hasPrevious: boolean;
    /**
     * The id of this genre
     */
    id: number;
    /**
     * Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).
     */
    listennotesUrl: string;
    /**
     * This genre's name.
     */
    name: string;
    nextPageNumber: number;
    pageNumber: number;
    /**
     * The id of parent genre.
     */
    parentId: number;
    podcasts: PodcastSimple[];
    previousPageNumber: number;
    total: number;
}
