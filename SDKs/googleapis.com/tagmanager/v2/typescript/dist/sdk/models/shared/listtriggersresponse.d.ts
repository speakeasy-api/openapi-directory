import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * List triggers response.
 */
export declare class ListTriggersResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM Triggers of a GTM Container.
     */
    trigger?: Trigger[];
}
