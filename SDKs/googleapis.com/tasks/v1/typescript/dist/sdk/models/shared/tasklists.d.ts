import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
/**
 * Successful response
 */
export declare class TaskLists extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Collection of task lists.
     */
    items?: TaskList[];
    /**
     * Type of the resource. This is always "tasks#taskLists".
     */
    kind?: string;
    /**
     * Token that can be used to request the next page of this result.
     */
    nextPageToken?: string;
}
