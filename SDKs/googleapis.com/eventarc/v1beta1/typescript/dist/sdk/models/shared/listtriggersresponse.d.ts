import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * The response message for the ListTriggers method.
 */
export declare class ListTriggersResponse extends SpeakeasyBase {
    /**
     * A page token that can be sent to ListTriggers to request the next page. If this is empty, then there are no more pages.
     */
    nextPageToken?: string;
    /**
     * The requested triggers, up to the number specified in `page_size`.
     */
    triggers?: Trigger[];
    /**
     * Unreachable resources, if any.
     */
    unreachable?: string[];
}
