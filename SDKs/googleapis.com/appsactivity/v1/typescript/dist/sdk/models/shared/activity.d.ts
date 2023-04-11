import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * Represents the changes associated with an action taken by a user.
     */
    combinedEvent?: Event;
    /**
     * A list of all the Events that make up the Activity.
     */
    singleEvents?: Event[];
}
