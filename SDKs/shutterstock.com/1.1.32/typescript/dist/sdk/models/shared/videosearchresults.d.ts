import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
/**
 * Video search results
 */
export declare class VideoSearchResults extends SpeakeasyBase {
    /**
     * List of videos
     */
    data: Video[];
    /**
     * Server-generated message, if any
     */
    message?: string;
    /**
     * Current page that is returned
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Unique identifier for the search request
     */
    searchId: string;
    /**
     * Total count of all results across all pages
     */
    totalCount: number;
}
