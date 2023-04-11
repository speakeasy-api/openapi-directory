import { SpeakeasyBase } from "../../../internal/utils";
import { RestorePlan } from "./restoreplan";
/**
 * Response message for ListRestorePlans.
 */
export declare class ListRestorePlansResponse extends SpeakeasyBase {
    /**
     * A token which may be sent as page_token in a subsequent `ListRestorePlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The list of RestorePlans matching the given criteria.
     */
    restorePlans?: RestorePlan[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
