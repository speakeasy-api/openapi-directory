import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents all the details pertaining to an event.
 */
export declare class EventData extends SpeakeasyBase {
    /**
     * Type of interaction with the object. Eg: 'play'.
     */
    eventAction?: string;
    /**
     * The object on the page that was interacted with. Eg: 'Video'.
     */
    eventCategory?: string;
    /**
     * Number of such events in this activity.
     */
    eventCount?: string;
    /**
     * Label attached with the event.
     */
    eventLabel?: string;
    /**
     * Numeric value associated with the event.
     */
    eventValue?: string;
}
