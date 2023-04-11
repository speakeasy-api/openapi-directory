import { SpeakeasyBase } from "../../../internal/utils";
import { ListMeta } from "./listmeta";
import { Task } from "./task";
/**
 * ListTasksResponse is a list of Tasks resources.
 */
export declare class ListTasksResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
     */
    apiVersion?: string;
    /**
     * List of Tasks.
     */
    items?: Task[];
    /**
     * The kind of this resource, in this case "TasksList".
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
