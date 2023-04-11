import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * ListJob Response.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * Jobs.
     */
    jobs?: Job[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
