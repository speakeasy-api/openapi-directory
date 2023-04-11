import { SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";
/**
 * Response message for HistoryService.List
 */
export declare class ListHistoriesResponse extends SpeakeasyBase {
    /**
     * Histories.
     */
    histories?: History[];
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.
     */
    nextPageToken?: string;
}
