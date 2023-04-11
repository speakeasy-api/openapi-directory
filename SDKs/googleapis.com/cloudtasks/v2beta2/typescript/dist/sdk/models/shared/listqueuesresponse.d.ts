import { SpeakeasyBase } from "../../../internal/utils";
import { Queue } from "./queue";
/**
 * Response message for ListQueues.
 */
export declare class ListQueuesResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. To return the next page of results, call ListQueues with this value as the page_token. If the next_page_token is empty, there are no more results. The page token is valid for only 2 hours.
     */
    nextPageToken?: string;
    /**
     * The list of queues.
     */
    queues?: Queue[];
}
