import { SpeakeasyBase } from "../../../internal/utils";
import { QueuedResource } from "./queuedresource";
/**
 * Response for ListQueuedResources.
 */
export declare class ListQueuedResourcesResponse extends SpeakeasyBase {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string;
    /**
     * The listed queued resources.
     */
    queuedResources?: QueuedResource[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
