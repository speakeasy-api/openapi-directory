import { SpeakeasyBase } from "../../../internal/utils";
import { ContributorProfile } from "./contributorprofile";
import { ErrorT } from "./error";
/**
 * List of contributor profiles
 */
export declare class ContributorProfileDataList extends SpeakeasyBase {
    /**
     * Conributor profiles
     */
    data?: ContributorProfile[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Error message
     */
    message?: string;
    /**
     * Page of response
     */
    page?: number;
    /**
     * Number of contributors per page
     */
    perPage?: number;
    /**
     * Total count of contributors for this request
     */
    totalCount?: number;
}
