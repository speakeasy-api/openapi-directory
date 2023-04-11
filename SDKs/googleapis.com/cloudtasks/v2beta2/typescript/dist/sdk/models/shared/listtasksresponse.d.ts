import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * Response message for listing tasks using ListTasks.
 */
export declare class ListTasksResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. To return the next page of results, call ListTasks with this value as the page_token. If the next_page_token is empty, there are no more results.
     */
    nextPageToken?: string;
    /**
     * The list of tasks.
     */
    tasks?: Task[];
}
