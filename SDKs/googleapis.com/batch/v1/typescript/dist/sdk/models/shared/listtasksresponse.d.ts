import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * ListTasks Response.
 */
export declare class ListTasksResponse extends SpeakeasyBase {
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Tasks.
     */
    tasks?: Task[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
