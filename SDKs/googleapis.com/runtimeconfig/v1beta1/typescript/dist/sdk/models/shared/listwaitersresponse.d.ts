import { SpeakeasyBase } from "../../../internal/utils";
import { Waiter } from "./waiter";
/**
 * Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
 */
export declare class ListWaitersResponse extends SpeakeasyBase {
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
    /**
     * Found waiters in the project.
     */
    waiters?: Waiter[];
}
