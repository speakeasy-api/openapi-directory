import { SpeakeasyBase } from "../../../internal/utils";
import { HotTablet } from "./hottablet";
/**
 * Response message for BigtableInstanceAdmin.ListHotTablets.
 */
export declare class ListHotTabletsResponse extends SpeakeasyBase {
    /**
     * List of hot tablets in the tables of the requested cluster that fall within the requested time range. Hot tablets are ordered by node cpu usage percent. If there are multiple hot tablets that correspond to the same tablet within a 15-minute interval, only the hot tablet with the highest node cpu usage will be included in the response.
     */
    hotTablets?: HotTablet[];
    /**
     * Set if not all hot tablets could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.
     */
    nextPageToken?: string;
}
