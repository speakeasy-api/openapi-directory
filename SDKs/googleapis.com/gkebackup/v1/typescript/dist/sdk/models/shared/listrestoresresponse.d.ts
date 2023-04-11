import { SpeakeasyBase } from "../../../internal/utils";
import { Restore } from "./restore";
/**
 * Response message for ListRestores.
 */
export declare class ListRestoresResponse extends SpeakeasyBase {
    /**
     * A token which may be sent as page_token in a subsequent `ListRestores` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The list of Restores matching the given criteria.
     */
    restores?: Restore[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
