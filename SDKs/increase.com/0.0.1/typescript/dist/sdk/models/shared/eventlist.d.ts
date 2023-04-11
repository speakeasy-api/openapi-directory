import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * A list of Event objects
 */
export declare class EventList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Event[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
