import { SpeakeasyBase } from "../../../internal/utils";
import { TimeEvent } from "./timeevent";
/**
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
 */
export declare class TimeEvents extends SpeakeasyBase {
    /**
     * The number of dropped annotations in all the included time events. If the value is 0, then no annotations were dropped.
     */
    droppedAnnotationsCount?: number;
    /**
     * The number of dropped message events in all the included time events. If the value is 0, then no message events were dropped.
     */
    droppedMessageEventsCount?: number;
    /**
     * A collection of `TimeEvent`s.
     */
    timeEvent?: TimeEvent[];
}
