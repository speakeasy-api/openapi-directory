import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { UpdatedMedia } from "./updatedmedia";
/**
 * List of updated media
 */
export declare class UpdatedMediaDataList extends SpeakeasyBase {
    /**
     * Updated media items
     */
    data?: UpdatedMedia[];
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
