import { SpeakeasyBase } from "../../../internal/utils";
import { Sfx } from "./sfx";
/**
 * Sound effects search results
 */
export declare class SFXSearchResults extends SpeakeasyBase {
    /**
     * List of tracks
     */
    data: Sfx[];
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
     * ID of the search
     */
    searchId: string;
    /**
     * Total count of all results across all pages
     */
    totalCount: number;
}
