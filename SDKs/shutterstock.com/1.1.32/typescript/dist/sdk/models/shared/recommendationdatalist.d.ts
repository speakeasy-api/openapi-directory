import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Recommendation } from "./recommendation";
/**
 * List of recommended images
 */
export declare class RecommendationDataList extends SpeakeasyBase {
    /**
     * Recommended images
     */
    data?: Recommendation[];
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
