import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
import { ErrorT } from "./error";
/**
 * List of tracks
 */
export declare class AudioDataList extends SpeakeasyBase {
    /**
     * Tracks
     */
    data?: Audio[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
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
     * Total count of all results across all pages
     */
    totalCount?: number;
}
