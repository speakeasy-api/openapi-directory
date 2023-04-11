import { SpeakeasyBase } from "../../../internal/utils";
import { Snooze } from "./snooze";
/**
 * The results of a successful ListSnoozes call, containing the matching Snoozes.
 */
export declare class ListSnoozesResponse extends SpeakeasyBase {
    /**
     * Page token for repeated calls to ListSnoozes, to fetch additional pages of results. If this is empty or missing, there are no more pages.
     */
    nextPageToken?: string;
    /**
     * Snoozes matching this list call.
     */
    snoozes?: Snooze[];
}
