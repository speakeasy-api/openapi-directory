import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ListMeta } from "./listmeta";
/**
 * ListJobsResponse is a list of Jobs resources.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
     */
    apiVersion?: string;
    /**
     * List of Jobs.
     */
    items?: Job[];
    /**
     * The kind of this resource, in this case "JobsList".
     */
    kind?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
