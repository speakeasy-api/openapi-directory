import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
/**
 * Audio search results
 */
export declare class AudioSearchResults extends SpeakeasyBase {
    /**
     * List of tracks
     */
    data: Audio[];
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
