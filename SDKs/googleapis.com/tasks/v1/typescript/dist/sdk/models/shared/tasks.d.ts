import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * Successful response
 */
export declare class Tasks extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Collection of tasks.
     */
    items?: Task[];
    /**
     * Type of the resource. This is always "tasks#tasks".
     */
    kind?: string;
    /**
     * Token used to access the next page of this result.
     */
    nextPageToken?: string;
}
